import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Lockheed = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Lockheed Martin</h1>

            <ul>
              <li>
                AMS 2700 Rev F Type 2 Passivate (<b>not 440C material</b>)
              </li>
              <li>AMS-C5541 Alocrom</li>
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

export default Lockheed;
