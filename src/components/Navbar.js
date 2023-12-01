import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import LogOut from "./LogOut";
import SideBar from "./SideBar";
import { useUser } from "../hooks/useUser";

function Navbar() {
  const currentUser = useUser();
  console.log(currentUser);
  return (
    <>
      <nav className='nav-bar'>
        <div className='logo'>
          <div>
            <img
              src='./Furniture.jpg'
              alt='icon'
              className='Dash-image'
            />
          </div>
          <div style={{ marginTop: "35px", fontFamily: "fantasy" }}>
            <h2>..WEKA</h2>
          </div>
        </div>
        <Search />

        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/order'>Order</NavLink>
          </li>

          <li>
            <SideBar />
          </li>
        </ul>
        <div>
          <LogOut />
        </div>
      </nav>
    </>
  );
}
export default Navbar;
