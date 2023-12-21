import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Marston = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>H.S. Marston Aerospace (Approval No. AS 926)</h1>
            <ul>
              <li>Approval No. AS 926 Approval No AS 970</li>
            </ul>{" "}
            <ul>
              <li>All Services Covered by Hamilton/Sunstrand</li>
            </ul>{" "}
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

export default Marston;
