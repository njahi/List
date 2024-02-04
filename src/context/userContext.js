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
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);
  return (
    <UsersContext.Provider
      value={{
        users,
        isLoading,
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
