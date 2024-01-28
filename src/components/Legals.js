import React from "react";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const Legals = () => {
  return (
    <div className='service-container'>
      <div className='service-cards'>
        <ScrollToTopOnMount />
        <h1>Legals</h1>
        <h3>
          Feel free to click on the links below to obtain copies of our legal
          documents.
        </h3>
        <div>
          <ul>
            <li>
              <a
                href='https://www.ashton-moore.co.uk/wp-content/uploads/2018/12/OC001-Standard-Terms-Conditions-rev.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href='https://www.ashton-moore.co.uk/wp-content/uploads/2018/12/NDA.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                Standard NDA
              </a>
            </li>
            <li>
              <a
                href='https://www.ashton-moore.co.uk/wp-content/uploads/2021/06/Copy-of-Credit-Account-Application-Form.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                Account Application Form
              </a>
            </li>{" "}
            <li>
              <a
                href='https://www.ashton-moore.co.uk/wp-content/uploads/2019/03/conditions-of-purchase.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                Conditions of Purchase
              </a>
            </li>{" "}
            <li>
              <a
                href='https://www.ashton-moore.co.uk/wp-content/uploads/2018/12/Further-Purchasing-Conditions.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                Further Conditions of Purchase
              </a>
            </li>{" "}
            <li>
              <a
                href='https://www.ashton-moore.co.uk/wp-content/uploads/2020/11/AS9100-revD-ex-2023.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                BSI (QUALITY)
              </a>
            </li>{" "}
            <li>
              <a
                href='https://www.ashton-moore.co.uk/wp-content/uploads/2022/10/ENV-14001-EMS-83936-1.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                BSI (ENVIROMENTAL)
              </a>
            </li>{" "}
            <li>
              <a
                href='https://www.ashton-moore.co.uk/wp-content/uploads/2018/12/AH04062018.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                GDPR
              </a>
            </li>{" "}
            <li>
              <a
                href='https://www.ashton-moore.co.uk/wp-content/uploads/2020/07/Webp.net-compress-image-6-scaled.jpg'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                Covid 19 Secure certification
              </a>
            </li>{" "}
            <li>
              <a
                href='https://www.ashton-moore.co.uk/wp-content/uploads/2022/11/Health-Safety-Policy-2022.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                H&S Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Legals;
