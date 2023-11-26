import { supabase } from "./supabase";
export async function createOrder(newOrder) {
  const { data, error } = await supabase.from("Orders").insert(newOrder);

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}
export async function getOrders() {
  const { data, error } = await supabase.from("Orders").select();

  if (error) {
    throw new Error(error?.message);
  }

  console.log(data);

  return data;
}
