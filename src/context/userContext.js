import { createContext, useContext } from "react";

const UserContext = createContext();
function UsersProvider({ children }) {
  return (
    <UserContext.Provider
      value={{
        users,
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
