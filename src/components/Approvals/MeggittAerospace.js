import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const MeggittAerospace = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Meggitt Aerospace</h1>
            <ul>
              <li>Meggitt Aircraft Brakes (previously Dunlop Aerospace)</li>
            </ul>
            <ul>
              <li>
                EM 1580-P46 Cadmium Plating (Meggitt have confirmed that we can
                use AMS 03-19)
              </li>
              <li>PRO 103 Phosphating/Parkerising</li>
              <li>PRO 181 Dry Film Lubricant</li>
              <li>PRO 213 Stress Relieve and De-embrittlement</li>
              <li>PRO 223 Molykote 321R</li>
              <li>
                PRO 227 Passivation <b>(not 440C material)</b>
              </li>
              <li>PRO 295 Alocrom 1200</li>
              <li>PRO 429 Chromic Acid Anodising</li>
              <li>PRO 430 Sulphuric Acid Anodising</li>
            </ul>
            <ul>
              <li>Meggitt Control Systems Coventry</li>
            </ul>
            <ul>
              <li>EPRO 103 Phosphate</li>
              <li>EPRO 227 Passivation</li>
              <li>EPRO 295 Local Alocrom</li>
              <li>EPRO 429 Chromic Anodise</li>
            </ul>
            <ul>
              <li>Meggitt Control Systems Birmingham (previously Serck)</li>
            </ul>
            <ul>
              <li>PS 009 Local Alocrom</li>
              <li>
                PS 492 Sulphuric Acid Anodising (small scratches where base
                material show require touch up using Alocrom 1200)
              </li>
              <li>
                PS 493 Chromic Acid Anodising (small scratches where base
                material show require touch up using Alocrom 1200)
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

export default MeggittAerospace;
