import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Hawker = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Hawker Beechcraft (Raytheon)</h1>
            <ul>
              <li>
                Approval No. HBIFSAS/ Part 1/0636 NOTE : The above are process
                approval numbers, not specifications
              </li>
            </ul>
            <ul>
              <li>12U Dry Grit Blasting</li>
              <li>12W De-oxidisation of Aluminium Alloys</li>
              <li>3E Magnetic Flaw Detection</li>
              <li>4a Chromic Anodising</li>
              <li>4l Flexible Permeable Painting</li>
              <li>4R Alocrom 1200</li>
              <li>4T Primer Painting</li>
              <li>4ZF Application of Polyurethane Finish</li>
              <li>50 De-embrittlement of Ferrous Alloys</li>
              <li>120 Passivation (not 440C material)</li>
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

export default Hawker;
