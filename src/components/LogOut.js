import React from "react";
import { useLogOut } from "../hooks/useLogOut";
import { AiOutlineLogout } from "react-icons/ai";
import toast from "react-hot-toast";

export default function LogOut() {
  const { logOutAPI, isLoading, error } = useLogOut();
  function handleLogOut() {
    logOutAPI();
  }
  if (isLoading) {
    return <p>Logging Out...</p>;
  }
  if (error) {
    toast.error("error logging out");
  }

  return (
    <button onClick={handleLogOut}>
      <AiOutlineLogout />
    </button>
  );
}
