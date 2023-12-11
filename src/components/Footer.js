// Footer.jsx

import React from "react";
import { Link } from "react-router-dom";

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
        {/* Text */}
        <p>Some text here...</p>
      </div>

      <div className='footer-section'>
        {/* Text Links - Section 1 */}
        <h4>Useful Links</h4>
        <ul>
          <li>
            <a href='#'>Link 1</a>
          </li>
          <li>
            <a href='#'>Link 2</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>

      <div className='footer-section'>
        {/* Text Links - Section 2 */}
        <h4>More Links</h4>
        <ul>
          <li>
            <a href='#'>Link 3</a>
          </li>
          <li>
            <a href='#'>Link 4</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
