import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Heroux = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Heroux Devtek (formerly APPH)</h1>

            <ul>
              <li>
                This approval body does not grant approvals. Approval to do work
                to any APPH spec. must be obtained from the customer and
                recorded. Examples of relevant specs. include those listed
                below.
              </li>
            </ul>

            <ul>
              <li>KLA 361 Moly Disulphide Spray</li>
              <li>KLA 369 Etch Primer BS2x32</li>
              <li>
                KLA 370 Passivation <b>(not 440C material)</b>
              </li>
              <li>KLA 805 Local alocrom</li>
              <li>KLA 824 Paint</li>
              <li>
                KLA 834 Magnetic Flaw Detect- NB: use ASTME1444 except
                1200uw/cm2 and accept standards
              </li>
              <li>
                NB: Cannot work to KLA881 on aluminium alloys as need pre-etch
              </li>
              <li>
                KLA 844 Anodising - <b>MANDATORY ALOCROM OF JIG MARKS</b>
              </li>
              <li>KLA 850 Epoxy Paint Scheme</li>
              <li>KLA 867 Cadmium Plate</li>
              <li>
                KLA 881 Penetrant Flaw Detect (not suitable for aluminium
                components due to pre-penetrant, etc)
              </li>
              <li>We use ASTME instead in accordance with MDOI-039</li>
              <li>
                BS2808 : 1997 Anodising of Titanium (HAL LCH parts only). NOTE:
                Nadcap waived for this process
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

export default Heroux;
