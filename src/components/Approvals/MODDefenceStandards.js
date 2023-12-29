import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const MOD = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h3>MOD Defence Standards</h3>
            <ul>
              <li>Approval No. FM00236</li>
            </ul>{" "}
            <ul>
              <li>AMS 03-2 Cleaning and preparation</li>
              <li>
                AMS 03-4 Pre-treatment and protection of steel more than 1450MPa
              </li>
              <li>
                AMS 03-9 Silver Plating- Only Copper based materials with no
                solder joints
              </li>
              <li>AMS 03-11 Phosphating</li>
              <li>AMS 03-18 Chromate conversion of aluminium</li>
              <li>AMS 03-19 Cadmium Plating</li>
              <li>AMS 03-25 Sulphuric acid anodising</li>
              <li>Def Stan 03-12 Chromate passivation of brass</li>
              <li>Def Stan 03-24 Chromic acid anodising</li>
              <li>Def Stan 03-32 Pre-treatment and painting</li>
              <li>Def Stan 80-31 Paint, finishing, alum</li>
              <li>Def Stan 80-54 Paint, fuel resistant, gloss</li>
              <li>Def Stan 80-39 Paint, interior of fuel tanks</li>
              <li>Def Stan 80-124 Paint, priming, stoving</li>
              <li>Def Stan 80-131 Paint, alum, heat resisting</li>
              <li>
                Def Stan 80-225 Paint Military vehicles and equipment IRR gloss
                non aircraft
              </li>
              <li>DTD 904 Cadmium Platting</li>
              <li>
                DTD 939 Silver plating (Thread gauge required as per spec)
              </li>
            </ul>
            <ul>
              <li>American Specifications</li>
            </ul>
            <ul>
              <li>AMS-QQ-P-416E Cadmium Plating (less than 1100MPa)</li>
              <li>AMS 2410 Silver Plate- Nuts only</li>
              <li>
                AMS 2411 Silver Plate- Only allows low alloy steels, martensitic
                or precipitated hardened corrosion resistant steels (CRES)
              </li>
              <li>AMS 2412 Silver Plate</li>
              <li>AMS 2470 Silver Plate</li>
              <li>AMS 2471 Sulphuric Anodise</li>
              <li>AMS 2472 Sulphuric Anodise</li>
              <li>AMS 2473 Chemical Conversion of Aluminium</li>
              <li>AMS 2481 Phosphate</li>
              <li>AMS 24700F Passivation</li>
              <li>
                ASTME 1417 Penetrant Flaw detection- Can do type 1 method A or D
                (level I,II,III)
              </li>
              <li>MIL-A-8625 Anodise, Sulphuric & Chromic</li>
              <li>MIL-DTL-5541 Alocrom</li>
              <li>MIL-PRF-40610 Solid Film Lubricant</li>
            </ul>
            <ul>
              <li>American Specifications</li>
            </ul>
            <ul>
              <li>
                BS EN 2516 Passivation (NOTE: C1, C2, C4 ONLY- C1 and C4 is for
                aerospace only)
              </li>
              <li>BS EN 2101 Chromic Acid Anodising</li>
              <li>BS EN ISO 7599 Anodising</li>
              <li>BS EN ISO 9717 Phosphating</li>
              <li>BS EN ISO 15730 Electropolishing</li>
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

export default MOD;
