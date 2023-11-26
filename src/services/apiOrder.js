import { supabase } from "./supabase";
export async function createOrder(newOrder) {
  const { data, error } = await supabase.from("Orders").insert(newOrder);

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}
