import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const EatonAeroquipAeroDivision = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Eaton Aeroquip Aero Division (Approval No. Y370)</h1>
            <ul>
              <li>
                Approval No. Y370 Approval granted for processes listed below.
                They do not issue their own specs. Work is done to BS and DEF
                standards and NADCAP accreditation, etc.
              </li>
            </ul>
            <ul>
              <li>Chromic Acid Anodising</li>
              <li>Chromic Acid Anodising</li>
              <li>Painting</li>
              <li>Silver Plating</li>
              <li>Sulphuric Acid Anodising</li>
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

export default EatonAeroquipAeroDivision;
