import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  const [showNavBar, setShowNavbar] = useState(false);

  const hanleShowNavnar = () => {
    setShowNavbar(!showNavBar);
  };

   const handleCloseNavbar = () => {
     setShowNavbar(false);
   };

    useEffect(() => {
      const handleOutsideClick = (event) => {
        const navbar = document.querySelector(".navbar");
        const navElements = document.querySelector(".nav-elements");

        if (
          !navbar.contains(event.target) &&
          !navElements.contains(event.target) &&
          showNavBar
        ) {
          handleCloseNavbar();
        }
      };

      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, [showNavBar]);

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='leftside'>

          <img  src="https://www.ashton-moore.co.uk/wp-content/uploads/2018/12/logo.jpg" class='logo' alt="Ashton & Moore Ltd, Aerospace, Industrial Finishing, Plating, Industrial Finishing, Anodising"></img>
          
        </div>
        <div className='menu-icon' onClick={hanleShowNavnar}>
          {showNavBar ? (
            <i>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 1024 1024'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM676.1 657.9c4.4 5.2.7 13.1-6.1 13.1h-58.9c-4.7 0-9.2-2.1-12.3-5.7L512 561.8l-86.8 103.5c-3 3.6-7.5 5.7-12.3 5.7H354c-6.8 0-10.5-7.9-6.1-13.1L470.2 512 347.9 366.1A7.95 7.95 0 0 1 354 353h58.9c4.7 0 9.2 2.1 12.3 5.7L512 462.2l86.8-103.5c3-3.6 7.5-5.7 12.3-5.7H670c6.8 0 10.5 7.9 6.1 13.1L553.8 512l122.3 145.9z'></path>
              </svg>
            </i>
          ) : (
            <i>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 448 512'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'></path>
              </svg>
            </i>
          )}
        </div>
        <div
          className={`nav-elements ${showNavBar && "active"}`}
          onClick={handleCloseNavbar}
        >
          <ul>
            <li>
              <i>{/*icon*/}</i>
              <NavLink to='/Home' onClick={handleCloseNavbar}>
                Home
              </NavLink>
            </li>
            <li>
              <i>{/*icon*/}</i>
              <NavLink to='/Services' onClick={handleCloseNavbar}>
                Services
              </NavLink>
            </li>
            <li>
              <i>{/*icon*/}</i>
              <NavLink to='/Aprovals' onClick={handleCloseNavbar}>
                Aprovals
              </NavLink>
            </li>
            <li>
              <i>{/*icon*/}</i>
              <NavLink to='/Legals' onClick={handleCloseNavbar}>
                Legals
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
