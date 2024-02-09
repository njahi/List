import { createContext, useContext, useEffect, useState } from "react";

import { supabase } from "../services/supabase";
const UsersContext = createContext();
function UsersProvider({ children }) {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(function () {
    async function fetchUsers() {
      try {
        const res = await supabase.from("User").select();
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setError("error fetching data of users");
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);
  async function login({ email, password }) {
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
  return (
    <UsersContext.Provider
      value={{
        users,
        isLoading,
        error,
        login,
      }}>
      {children}
    </UsersContext.Provider>
  );
}
function useUsers() {
  const context = useContext(UsersContext);
  if (context === undefined)
    throw new Error("The context was used outside the provider");
  return context;
}
export { UsersProvider, useUsers };
