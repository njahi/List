import React from "react";
import { useLogOut } from "../hooks/useLogOut";
import toast from "react-hot-toast";
import { Popover } from "@headlessui/react";
import { BiSolidUserCircle } from "react-icons/bi";

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
    <Popover>
      <Popover.Button>
        <BiSolidUserCircle size={40} />
      </Popover.Button>
      <Popover.Panel>
        <div>
          <button onClick={handleLogOut}>log Out</button>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
