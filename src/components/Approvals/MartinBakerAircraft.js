import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Martin = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Martin-Baker Aircraft</h1>
            <ul>
              <li>
                The data card number approved by Martin-Baker, not a
                specification.
              </li>
            </ul>{" "}
            <ul>
              <li>IPS 9AA-01 Electropolish</li>
              <li>PS 306 Anodising</li>
            </ul>
          </div>
        </div>
      </section>
      <button onClick={handleBack} className='back-button'>
        BACK
      </button>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Martin;
