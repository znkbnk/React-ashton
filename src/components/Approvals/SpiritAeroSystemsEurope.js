import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const BAESystems = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h3>Spirit Aero Systems (Europe)</h3>
            <ul>
              <li>Approval No. SPIRIT/0161</li>
            </ul>
            <ul>
              <li>4a Chromic Anodising</li>
              <li>4c Sulphuric Anodising</li>
              <li>4r Chromate Conversion (Alocrom)</li>
              <li>4t Paint Spraying and Stoving</li>
              <li>4u Phosphating</li>
              <li>5o De-embrittlement (ferrous alloys)</li>
              <li>8v Metallurgical and Chemical Testing</li>
              <li>12o Passivation</li>
              <li>18f Final Inspection & Release</li>
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

export default BAESystems;
