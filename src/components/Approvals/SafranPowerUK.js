import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Safran = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Safran Power UK (Formerly Goodrich Power Systems)</h1>
            <ul>
              <li>
                Approval No. 7002305 Release-981-151-001 or PS-06-10 No Specific
                Safran Power Approval
              </li>
            </ul>
            <ul>
              <li>914-026-002 - Silver Plating</li>
              <li>914-032-045 - Sulphuric Acid Anodising of Aluminium</li>
              <li>914-032-047 - Chromic Acid Anodising of Aluminium</li>
              <li>914-032-106 - Passivation</li>
              <li>
                914-034-003/004 - Application of Paints Resistant to Lubricant &
                Corrosion
              </li>
              <li>914-034-116 - Anti-Tracking Paint- Air Drying</li>
              <li>914-034-117 - Anti-Tracking Paint- Stoving</li>
              <li>914-040-035/044 - Dry Film Lubricants- DAG 504</li>
              <li>914-632–59/061 - Alocrom 1200</li>
              <li>915-018-009 - Stress Relieve</li>
              <li>915-018-051 - Stress Relieve of Steels</li>
              <li>981-014-001 - Sulphuric Acid Anodising</li>
              <li>981-014-002 - Chromic Acid Anodising</li>
              <li>981-014-003 - Cadmium Plate</li>
              <li>981-257-540 - Protective Finishes to 80-152</li>
              <li>Pr 1110 - Alocrom 1200</li>
              <li>Pr 1050 - Passivation</li>
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

export default Safran;
