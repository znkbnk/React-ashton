// Footer.jsx

import React from "react";
import { Link} from "react-router-dom";
import Atropos from "atropos";


const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const footerAtropos = Atropos({
    el: ".footer",
    activeOffset: 40,
    alwaysActive: true,
    highlight: true,
  });
  return (
    <footer>
      <div className='footer-section'>
        <div class='atropos footer'>
          <div class='atropos-scale'>
            <div class='atropos-rotate'>
              <div class='atropos-inner'>
                <Link to='/'>
                  <img
                  
                    data-atropos-offset='3'
                    src='https://www.ashton-moore.co.uk/wp-content/uploads/2018/12/logo.jpg'
                    className='logo'
                    alt='Ashton & Moore Ltd, Aerospace, Industrial Finishing, Plating, Industrial Finishing, Anodising'
                  ></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-section'>
        <ul>
          <li>Ashton & Moore Limited</li>
          <li>12 Smith Street, Hockley</li>
          <li>Birmingham, B19 3EX</li>
        </ul>
      </div>

      <div className='footer-section'>
        <ul>
          <li>
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
