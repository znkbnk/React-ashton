import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Claverham = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Claverham</h1>
            <ul>
              <li>
                Approval No. 002305 (Previously CDS, AEC, Goodrich Birmingham)
              </li>
            </ul>{" "}
            <ul>
              <li>FEIS 101A Anodising of Aluminium Alloy- Chromic</li>
              <li>FEIS 101B Anodising of Aluminium Alloy- Sulphuric</li>
              <li>FEIS 102 Cadmium Plating</li>
              <li>FEIS 105 Phosphating Treatment (Parco Lubrite)</li>
              <li>FEIS 111 Alocrom</li>
              <li>
                FEIS 115 Passivation of Corrosion-Resistant Steels (not 440C
                material)
              </li>
              <li>FEIS 701A Non Destructive Testing- Magnetic Particle</li>
              <li>FEIS 701B Non Destructive Testing- Dye Penetrant</li>
              <li>HDS 1340 Paint Systems</li>
              <li>HDS 1360 Phosphate and Paint Systems</li>
              <li>PN14.06-03 Thin Sulphuric Acid Anodise</li>
              <li>AC7108 Nadcap Chemical Processing</li>
              <li>AC7114 Nadcap Non Destructive Testing</li>
              <li>
                MIL-A-8625 Type I Chromic Anodising (was FEIS101B) Class 1
              </li>
              <li>
                MIL-A-8625 Type II Sulphuric Anodising (was FEIS101B) Class 1
              </li>
              <li>
                AMS-QQ-P-416 Type II Class 1 or 3 for Threads Cadmium Plating
                (wasFEIS102)
              </li>
              <li>914-032-023 Phosphating (was FEIS105)</li>
              <li>PN14.06-03 Thin Film Sulphuric Anodising</li>
              <li>AC7108 NADCAP Chemical Processing</li>
              <li>AC7114 NADCAP Non Destructive Testing</li>
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

export default Claverham;
