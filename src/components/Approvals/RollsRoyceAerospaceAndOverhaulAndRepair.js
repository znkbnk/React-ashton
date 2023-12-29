import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const RollsRoyce = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h3>Rolls-Royce Aerospace & Overhaul & Repair</h3>
            <ul>
              <li>
                Approval No. 01050 Release- RR 9000 SABRe (Flaw Detection
                Requirements As Per Order/Drawing/Layout)
              </li>
            </ul>
            <ul>
              <li>AMS2472E Sulphuric Anodising</li>
              <li>AMS2700 Passivation</li>
              <li>MIL-A-8625 Type 1 Class 1 Anodising</li>
              <li>RPS 1 Stripping of Anodised Films</li>
              <li>RPS 6 Phosphating</li>
              <li>
                RPS 26-Sht. 7 Stripping of Paint Finishes for Aluminium Filled
                Coatings
              </li>
              <li>RPS 26-Sht. 9 General Paint Stripping</li>
              <li>RPS 54 sect 3 & 4 Anodising of Aluminium</li>
              <li>
                RPS 128 Solvent Cleaning and De-Greasing (replaced by RRP5100)
              </li>
              <li>RPS 168 Silver Plating</li>
              <li>RPS 170 Cadmium Plating</li>
              <li>RPS 386 Abrasive Blasting</li>
              <li>RPS 436 Chemical Conversion of Aluminium</li>
              <li>
                RPS 440 Alkaline Cleaning and De-rusting (superseded by
                RRP51025)
              </li>
              <li>RPS 661 Organic Barrier Coatings</li>
              <li>RPS 661/1 PTFE Dispersion</li>
              <li>RPS 661/5 Dry Film Lubricant MSRR 3004</li>
              <li>RPS 661/9 Molybdenum disulphide dry film lubricant</li>
              <li>RPS 661/10 Graphite dry film lubricant</li>
              <li>RPS 661/11 Air cure graphite dry film lubricant</li>
              <li>RPS 661/12 Mica filled coating MSRR 9054</li>
              <li>RPS 661/15 Heat resisting aluminium MSRR 9029</li>
              <li>RPS 661/16 Heat resistant ES coating</li>
              <li>RPS 661/21 Heat cured epoxy paint system</li>
              <li>RPS 661-22 Application of Polymide Coatings</li>
              <li>RPS 661/25 PRC-Desoto 2-part epoxy paint system</li>
              <li>RPS 661/28 High temperature marking paints</li>
              <li>RPS 661/30 Day-glo inspection aid paint</li>
              <li>
                RPS 661/32 PRC-Desoto 2-part epoxy/polyurethane paint system
              </li>
              <li>RPS 661/34 Epoxy varnish erosion resistant coating</li>
              <li>RPS 661/43 Indestructible 2-part epoxy paint systems</li>
              <li>RPS 661/47 Intumescent paint</li>
              <li>
                RPS 661/50 Indestructible 2-part epoxy polyurethane paint system
              </li>
              <li>
                RPS 666/1 Sacrificial corrosion resistant coating (use type A
                wherever possible as type B requires post peen cleaning and
                process substantiation)
              </li>
              <li>RPS 666/2 Sacrificial corrosion resistant (thin) coating</li>
              <li>RPS 666/3 Organic sacrificial corrosion resistant coating</li>
              <li>RPS 666/4 Sealcoat</li>
              <li>
                RPS 761 Application of Protective Finishes to Group Support
                Equipment
              </li>
              <li>
                RPS 953 Thermal Processing of Materials up to 600oC Control of
                Classified Parts Engine Component Repair or Partial Repair to
                Specific Instructions Delegation of Authority to Approve Process
                Data Cards in accordance with addendum 1
              </li>
              <li>RRP51000 Vapour Degreasing (was RPS128)</li>
              <li>RRP51025 Alkaline Cleaning and De-Rusting (was RPS440)</li>
              <li>
                RRP58003 Penetrant Dye Inspection- need QAS, material and Issue
                No. 1A2 and 1D2
              </li>
              <li>
                RRP58004 Magnetic Particle Inspection : less than 1100 MPa
                before plating : more than 1100 MPa after plating
              </li>
              <li>RRP58007 Visual Inspection</li>
            </ul>
            <ul>
              <li>RR Overhaul and Repair</li>
            </ul>
            <ul>
              <li>AMS 2470/CPW 20 Chromic Acid Anodise</li>
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

export default RollsRoyce;
