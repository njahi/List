import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase";

const UserContext = createContext();
function UsersProvider({ children }) {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchUsers() {
      try {
        const res = await supabase.from("Users").select();
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
    <UserContext.Provider
      value={{
        users,
        isLoading,
      }}>
      {children}
    </UserContext.Provider>
  );
}
function useUsers() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("The context was used outside the provider");
  return context;
}
export { UsersProvider, useUsers };
