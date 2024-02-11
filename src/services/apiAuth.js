import { supabase } from "./supabase";

export async function login({ email, password }) {
  // 1. Check if the user is an Admin
  const users = await getUsers();

  const currentUser = users.find((user) => user?.email === email);
  console.log(currentUser);

  // const isAdmin = currentUser?.isAdmin;

  if (!currentUser || currentUser === undefined) {
    throw new Error("User Undefined");
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);

  sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

  return data;
}
export async function getUsers() {
  const { data, error } = await supabase.from("User").select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

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
