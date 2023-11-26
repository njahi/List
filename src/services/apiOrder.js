import { supabase } from "./supabase";
export async function insertUser(email, name) {
  const { data, error } = await supabase.from("User").insert({
    email,
    userName: name,
    isAdmin: false,
  });

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}
