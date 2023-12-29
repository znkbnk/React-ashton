import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const RRCS = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h3>RRCS</h3>
            <ul>
              Approval No. 002305 (Previously CDS, AEC, Goodrich Birmingham)
              <li></li>
            </ul>
            <ul>
              <li>HCP 355 Gloss Polyurethane Paint to BSX 34A</li>
              <li>HCP 463 Alocrom</li>
              <li>PF12 Cadmium Plating</li>
              <li>PF12B Cadmium Plating</li>
              <li>PF12E Cadmium Plating</li>
              <li>PF12F Cadmium Plating</li>
              <li>PF 16 Chromic Acid Anodising</li>
              <li>PF 16A Sulphuric Acid Anodising</li>
              <li>PF 27 Silver Plating</li>
              <li>TI 3/45 Visual Inspection</li>
              <li>TI 25/1 Silver Plating</li>
              <li>TI 44/C Anodising</li>
              <li>WP 13 Silver plating</li>
              <li>WP 42G Parco-Lubrite</li>
              <li>WP 92 Alocrom 1200</li>
              <li>WP 122 Fluorescent Penetrant Flaw Detection</li>
              <li>WP 147 Abrasive blasting</li>
              <li>WP 180D Graphite Dry film Lubricant Coating</li>
              <li>WP 269 Silver Plating</li>
              <li>WP 337 Silver Plating</li>
              <li>WP 340 Silver Plating</li>
              <li>WP 387 Chromate passivation of Cadmium plating</li>
              <li>WP 523 Magnetic Particle Flaw Detection</li>
              <li>
                WP 717 (Part of approved specs.- no separate approval required)
              </li>
              <li>WP 1046 Application of Intumescent paint</li>
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

export default RRCS;
