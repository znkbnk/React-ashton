import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Dowty = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Dowty Rotol</h1>
            <ul>
              <li>
                For AV8B processes only. No specific approvals required.
                Approvals as per other Dowty sites.
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

export default Dowty;
