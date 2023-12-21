import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const GE = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>
              GE Aviation- Q2 (Formerly Smith’s Aerospace / Dowty Propellers)
              (Approval No. PRO 16691P)
            </h1>
            <ul>
              <li>
                Approval No. PRO 16691P Q2 (Formerly Smith’s Aerospace / Dowty
                Propellers) (FD Requirements as per Drawing/Order/Layout)
              </li>
            </ul>
            <ul>
              <li>NDT2 DAP Magnetic Flaw Detection</li>
              <li>
                NDT 3 DAP Inspection of Ground Chromium parts- Use P E Pen only
              </li>
              <li>NDT 8 DAP Liquid Penetrant Inspection- Use P E Pen only</li>
              <li>PS5100 Cadmium Plating (less than 1450MPa)</li>
              <li>
                PS5102 Chromic Acid Anodise (+ mandatory Alocroming Of Jig
                Marks)
              </li>
              <li>
                PS5102 Sulphuric Acid Anodising (+ mandatory Alocroming Of Jig
                Marks)
              </li>
              <li>
                PS5108 Phosphate (AMS2418) (Note : must be below 1450 Mpa/210
                ksi)
              </li>
              <li>PS5114 Alocrom</li>
              <li>
                PS5124 Passivation of Stainless Steel <b>(not 440C material)</b>
              </li>
              <li>PS 5618 Air Drying Epoxide Paint Coatings</li>
              <li>PS 5632 Polyurethane Paint Coatings</li>
            </ul>
            <ul>
              <li>Painting to DAP Specifications</li>
            </ul>
            <ul>
              <li>PS5603 Two pack epoxy paint</li>
              <li>PS5618 Air-drying epoxide paint</li>
              <li>PS5632 Polyurethane paint</li>
              <li>PS5026 Solid Film Lubricants</li>
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

export default GE;
