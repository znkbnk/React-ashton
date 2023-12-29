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
            <h3>Moog Aerocraft Group</h3>
            <ul>
              <li>
                Approval No. PRO 16691P Release - SQR-1 and SQR-2 (Previously GE
                Aviation, Smith's Aerospace and Dowty Wolverhampton)
              </li>
            </ul>
            <ul>
              <li>AMS 2411 Silver Plating</li>
              <li>AMS 2700 Passivation of Corrosion-Resistant Steels</li>
              <li>ASTM A967 Passivation of Stainless Steels</li>
              <li>
                ASTM E1417/E1417M Liquid Penetrant Testing Standard Practice
              </li>
              <li>ASTM E1444 Wet Continuous Method</li>
              <li>
                MIL-A-8625 Anodic Coating for Aluminium and Aluminium Alloys
              </li>
              <li>MIL-D-5541 Chemical Conversion coatings on Aluminium</li>
              <li>NADCAP CP- Nadcap Accreditation for Chemical Processing</li>
              <li>
                NADCAP NDT- Nadcap Accreditation for Non-Destructive Testing
              </li>
              <li>
                UKWCP.001B- MSPS 100CP.001 Sulphuric Anodising- include
                mandatory alocroming of jig marks
              </li>
              <li>
                UKWCP.001C- MSPS 100CP.001 Chromic Acid Anodising- include
                mandatory alocroming of jig marks
              </li>
              <li>
                UKWCP.002- MSPS 100CP.002 Chemical Conversion Coatings on
                Aluminium Alloys
              </li>
              <li>UKWCP.004- MSPS 100CP.004 Cadmium Plating</li>
              <li>
                UKWCP.005- MSPS 100CP.005 Passivation of Corrosion-Resistant
                Steels (not 440C material)
              </li>
              <li>
                UKWCP.009- MSPS 100CP.009 Manganese Phosphate Treatment of Steel
              </li>
              <li>UKWCPS 1 Dry Film Lubricants</li>
              <li>UKWPS 164 Electropolishing of Investment Castings</li>
              <li>UKWPS 174 Paint Schemes</li>
              <li>
                UKWPS 74 Magnetic Particle Inspection - less than 1100 MPa
                before and after plating - more than 1100 MPa after plating
              </li>
              <li>
                UKWPS 79 Fluorescent Penetrant Inspection- use PE pen only
              </li>
              <li>PS 45 Temporary Protection of Parts</li>
              <li>PS 143 Abrasive Blast</li>
              <li>PS 156 Part Marking</li>
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
