import { supabase } from "./supabase";
export async function insertOrder(
  orderName,
  category,
  quantity,
  amount,
  supplier,
  email,
  number,
  description
) {
  const { data, error } = await supabase.from("Orders").insert({
    email: email,
    order: orderName,
    category: category,
    quantity: quantity,
    amount: amount,
    supplier: supplier,
    number: number,
    description: description,
  });

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}
