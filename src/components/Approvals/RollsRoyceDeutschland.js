import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const RollsRoyceDeutschland = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Rolls-Royce (Deutschland)</h1>
            <ul>
              <li>Approval No. 97560/04 Release- RR 9000 SABRe</li>
            </ul>{" "}
            <ul>
              <li>AMS 2472 E Sulphuric Anodising</li>
              <li>AMS 2700 Passivation</li>
              <li>MIL-A-8625 Anodising</li>
              <li>RPS 6 Phosphating</li>
              <li>RPS 26/7 Paint Stripping</li>
              <li>RPS 26/9 Paint Stripping</li>
              <li>RPS 54 Anodising of Aluminium</li>
              <li>RPS 128 Cleaning and Degreasing</li>
              <li>RPS 168 Silver Plating</li>
              <li>RPS 170 Cadmium Plating</li>
              <li>RPS 386 Abrasive Blasting</li>
              <li>RPS 436 Chromate Treatment</li>
              <li>RPS 440 Alkaline Cleaning and De-Rusting</li>
              <li>RPS 661 Organic Coatings</li>
              <li>RPS 661/1 PTFE Dispersion</li>
              <li>RPS 661/5 Dry Film Lubricant MSRR 3004</li>
              <li>RPS 661/9 Molybdenum Disulphide Dry Film :Lubricant</li>
              <li>RPS 661/10 Graphite Dry Film Lubricant</li>
              <li>RPS 661/11 Air Cure Graphite Dry Film Lubricant</li>
              <li>RPS 661/12 Mica Filled Coating MSRR 9054</li>
              <li>RPS 661/15 Heat Resistant Aluminium Paint</li>
              <li>RPS 661/16 Heat Resistant ES Coating</li>
              <li>RPS 661/21 Heat Cured Epoxy Paint System</li>
              <li>RPS 661/25 PRC-Desoto two part Epoxy Paint System</li>
              <li>RPS 661/28 High Temperature Marking Paints</li>
              <li>RPS 661/30 Day-Glo Inspection Aid Paint</li>
              <li>
                RPS 661/32 PRC-Desoto two part Epoxy/Polyurethane Paint System
              </li>
              <li>RPS 661/34 Epoxy Varnish Erosion Resistant Coating</li>
              <li>RPS 661/43 Indestructible two part Epoxy Paint Systems</li>
              <li>RPS 661/47 Intumescent Paint</li>
              <li>
                RPS 661/50 Indestructible two part Epoxy/Polyurethane Paint
                System
              </li>
              <li>
                RPS 666/1 Sacrificial Coating (use Type A wherever possible as
                Type B requires post peen cleaning and process substantiation)
              </li>
              <li>RPS 666/2 Thin Sacrificial Coating</li>
              <li>RPS 666/3 Organic Sacrificial Coating</li>
              <li>RPS 666/4 Sealcoat</li>
              <li>RPS 667 Two Part Polyurethane Coating</li>
              <li>RPS 681 Cancelled</li>
              <li>RPS 953 Control Procedure for Furnaces, etc.</li>
              <li>RRP 58003- 1A2 and 1D2 Penetrant Dye Inspection</li>
              <li>RRP 58004 Magnetic Particle Inspection</li>
              <li>RRP 58007 Visual Inspection</li>
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

export default RollsRoyceDeutschland;
