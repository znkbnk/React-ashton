import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  const [showNavBar, setShowNavbar] = useState(false);

  const hanleShowNavnar = () => {
    setShowNavbar(!showNavBar);
  };

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='leftside'>
          <h1>Logo</h1>
        </div>
        <div className='menu-icon' onClick={hanleShowNavnar}>
          {showNavBar ? <i>{/*icon*/}</i> : <i>{/*icon*/}</i>}
        </div>
        <div className={`nav-elements ${showNavBar && "active"}`}>
          <ul>
            <li>
              <i>{/*icon*/}</i>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <i>{/*icon*/}</i>
              <NavLink to='/'>Services</NavLink>
            </li>
            <li>
              <i>{/*icon*/}</i>
              <NavLink to='/'>Aprovals</NavLink>
            </li>
            <li>
              <i>{/*icon*/}</i>
              <NavLink to='/'>Legals</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
