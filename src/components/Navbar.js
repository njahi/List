import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='nav-bar'>
        <img
          src='./Furniture.jpg'
          alt='icon'
          className='Dash-image'
        />
        <input
          className='search'
          type='text'
          placeholder='Search Asset...'
        />

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
