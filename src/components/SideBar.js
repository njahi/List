import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiDashboardLine, RiSettings2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineDatabase,
} from "react-icons/ai";
import { useUser } from "../hooks/useUser";
import "./SideBar.css";

export default function SideBar() {
  const currentUser = useUser();
  console.log(currentUser);
  return (
    <div className='dropdown'>
      <AiOutlineMenu size={30} />
      <div className='dropdown-content'>
        <Link
          to='/asset'
          className='dashboard-item'>
          <RiDashboardLine className='dashboard-icon' />
          <span className='dashboard-label'>Asset</span>
        </Link>
        <br />

        <Link
          to='/inventorymanagement'
          className='dashboard-item'>
          <AiOutlineDatabase className='dashboard-icon' />
          <span className='dashboard-label'>Inventory Management</span>
        </Link>
        <br />
        <Link
          to='/reports'
          className='dashboard-item'>
          <AiOutlineBarChart className='dashboard-icon' />
          <span className='dashboard-label'>Reports</span>
        </Link>
        <br />
        <Link
          to='/settings'
          className='dashboard-item'>
          <RiSettings2Line className='dashboard-icon' />
          <span className='dashboard-label'>Settings</span>
        </Link>
        <br />
      </div>
    </div>
  );
}
