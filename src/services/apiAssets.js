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

  const imagePath = `${supabaseUrl}/storage/v1/object/public/AssetsImage/${imageName}`;

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

// [DELETE] API for deleting
export async function deleteAsset(id) {
  console.log(id);
  const { data, error } = await supabase.from("Assets").delete().eq("id", id);

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}
// [UPDATE] API for updating
export async function editAsset(newAsset) {
  console.log(newAsset);
  const { data, error } = await supabase.from("Assets").update().eq("id", 1);
  if (error) {
    throw new Error(error?.message);
  }
  return data;
}
