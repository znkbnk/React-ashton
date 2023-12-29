import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Parker = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h3>Parker Hannifin & Pratt & Whitney</h3>
            <ul>
              <li>Approval Specification AM203 J</li>
            </ul>
            <ul>
              <li>A 017 MIL-A-8625F) Sulphuric Anodising</li>
              <li>Q 050 (D112) Inspection System</li>
              <li>R 010 (MIL-F-18264D) Paint- Organic Application</li>
            </ul>
            <ul>
              <li>Pratt & Whitney (Canada)</li>
            </ul>
            <ul>
              <li>AMS 2470/CPW 20 Chromic Acid Anodise</li>
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

export default Parker;
