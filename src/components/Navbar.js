import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
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
