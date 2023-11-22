import { supabase } from "./supabase";

// [API] requests for Assets Table
export async function getAssets() {
  const { data, error } = await supabase.from("Assets").select();

  if (error) {
    throw new Error(error?.message);
  }

  console.log(data);

  return data;
}
