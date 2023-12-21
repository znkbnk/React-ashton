import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Babcock = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Babcock International Group</h1>

            <ul>
              <li>Internal Doc. 911 Penetrant Dye Inspection</li>
              <li>Internal Doc. 5F-01 Chromic Anodising</li>
              <li>Internal Doc. 7BH-03 Paint</li>
              <li>Internal Doc. 5KA-01 Alocrom</li>
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

export default Babcock;
