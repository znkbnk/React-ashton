import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Flight = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Flight Refuelling</h1>
            <ul>
              <li>
                Flight Refuelling Quality system allows their sub-contractors to
                choose which sub-contractors to use.
              </li>
            </ul>
            <ul>
              <li>DS 26 00 Processing Requirements</li>
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

export default Flight;
