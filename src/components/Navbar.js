import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  return (
    <>
      <nav className='nav-bar'>
        <img
          src='./Furniture.jpg'
          alt='icon'
          className='Dash-image'
        />
        <Search />

        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/service'>Service</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
