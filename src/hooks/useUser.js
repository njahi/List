export function useUser() {
  const currentUser = sessionStorage.getItem("currentUser");

  return JSON.parse(currentUser);
}
