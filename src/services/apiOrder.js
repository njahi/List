import { supabase } from "./supabase";
export async function createOrder(
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
    orderName: orderName,
    category: category,
    quantity: quantity,
    amount: amount,
    supplier: supplier,
    email: email,
    number: email,
    description: description,
  });

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}
