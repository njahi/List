import { supabase } from "./supabase";

export async function login() {}

export async function signUp({ email, password, name: userName }) {
  console.log(email, password, userName);
  const { data: newUser, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        userName,
      },
    },
  });

  if (error) {
    throw new Error(error?.message);
  }

  await insertUser(email, userName);

  return newUser;
}

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
