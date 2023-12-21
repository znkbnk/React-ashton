import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Mettis = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Mettis Aerospace</h1>
            <ul>
              <li>
                Approval No 266 All Services Covered by Ashton & Moore's AS9100
                Rev. D Accreditation
              </li>
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

export default Mettis;
