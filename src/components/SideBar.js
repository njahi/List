import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiDashboardLine, RiSettings2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineDatabase,
} from "react-icons/ai";
import "./SideBar.css";

export default function SideBar() {
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
        <Link
          to='/reports'
          className='dashboard-item'>
          <AiOutlineBarChart className='dashboard-icon' />
          <span className='dashboard-label'>Reports</span>
        </Link>
        <Link
          to='/inventorymanagement'
          className='dashboard-item'>
          <AiOutlineDatabase className='dashboard-icon' />
          <span className='dashboard-label'>Inventory Management</span>
        </Link>
        <Link
          to='/documentation'
          className='dashboard-item'>
          <AiOutlineFileText className='dashboard-icon' />
          <span className='dashboard-label'>Documentation</span>
        </Link>
        <Link
          to='/settings'
          className='dashboard-item'>
          <RiSettings2Line className='dashboard-icon' />
          <span className='dashboard-label'>Settings</span>
        </Link>
      </div>
    </div>
  );
}
