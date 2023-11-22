import { supabase, supabaseUrl } from "./supabase";

// [API] requests for Assets Table
export async function getAssets() {
  const { data, error } = await supabase.from("Assets").select();

  if (error) {
    throw new Error(error?.message);
  }

  console.log(data);

  return data;
}

// [CREATE API]  for Assets
export async function createAsset(newAsset) {
  const imageName = `${Math.random()}-${newAsset.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/assetImages/${imageName}`;

  const { data, error } = await supabase
    .from("Assets")
    .insert([{ ...newAsset, image: imagePath }]);

  if (error) {
    throw new Error(error?.message);
  }

  const { error: storageError } = await supabase.storage
    .from("AssetsImage")
    .upload(imageName, newAsset.image, {
      cacheControl: "3600",
      upsert: false,
    });

  if (storageError) {
    throw new Error(error?.message);
  }

  return data;
}
