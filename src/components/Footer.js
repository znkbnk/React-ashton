// Footer.jsx

import React from "react";
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className='footer-section'>
        <Link to='/'>
          <img
            src='https://www.ashton-moore.co.uk/wp-content/uploads/2018/12/logo.jpg'
            className='logo'
            alt='Ashton & Moore Ltd, Aerospace, Industrial Finishing, Plating, Industrial Finishing, Anodising'
          ></img>
        </Link>
      </div>

      <div className='footer-section'>
        <ul>
          <li>Ashton & Moore Limited</li>
          <li>12 Smith Street, Hockley</li>
          <li>Birmingham, B19 3EX</li>
        </ul>
      </div>

      <div className='footer-section'>
        <ul >
          <li >
            <i>{/*icon*/}</i>
            <Link to='/Privacy'>Privacy Policy</Link>
          </li>
          <li>
            <i>{/*icon*/}</i>
            <Link to='/Cookies'>Cookie Policy</Link>
          </li>
          <li>
            <i>{/*icon*/}</i>
            <Link to='/Terms'>Terms and Conditions</Link>
          </li>
        </ul>
      </div>

      <div className='footer-section'>
        <ul>
          <li>Company No: 195160</li>
          <li>VAT No: 670939307</li>
          <li>Copyright © 2024. All Rights Reserved.</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
