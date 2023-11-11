import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className='dropdown'>
      <AiOutlineMenu />
      <div className='dropdown-content'></div>
    </div>
  );
}
