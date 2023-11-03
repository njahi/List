export function getAuthToken() {
  const token = sessionStorage.getItem("Token");
  return token;
}
