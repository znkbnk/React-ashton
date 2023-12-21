import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Triumph = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Triumph Actuation Systems</h1>
            <ul>
              <li>
                Approval No. PRO 16691H Vendor ID: 5107 Release- SQ93 (
                Previously - GE Aviation- UK Landing Gear- Smiths Aerospace and
                Dowty Hydraulics ) (Flaw Detect Requirements as per
                Drawing/Order/Layout)
              </li>
            </ul>
            <ul>
              <li>
                NDT2 Magnetic Flaw Detection- NDT28 to be done both prior to and
                after plating
              </li>
              <li>
                NDT3 Inspection of Ground Chromium Plated parts- Use PE pen only
                (level 3 pen needed for in service parts)
              </li>
              <li>
                NDT8 Liquid Penetrant Inspection- Use PE pen only (level 3 pen
                needed for in service parts)
              </li>
              <li>
                NDT28 Magnetic Flaw Detection- NDT28 to be done both prior to
                and after plating
              </li>
              <li>
                NDT29 Liquid Penetrant Inspection- Use PE pen only (level 3 pen
                needed for in service parts)
              </li>
              <li>
                NDT30 Inspection of Ground Chromium Plated parts- Use PE pen
                only (level 3 pen needed for in service parts)
              </li>
              <li>PS 100 Cadmium Plating (less than 1450MPa)</li>
              <li>PS 100M Cadmium plating- No passivate. (Marine)</li>
              <li>PS 102-1 Chromic Acid Anodise and dichromate seal</li>
              <li>PS 102-2 Sulphuric Acid Anodising & dichromate seal</li>
              <li>
                PS 102-4 Sulphuric Acid Anodising & dye & nickel acetate seal
              </li>
              <li>PS 102-5 Tartaric Sulphuric Acid Anodising</li>
              <li>PS 102-6 Chromic Acid Anodising & how water seal</li>
              <li>PS 102-7 Sulphuric Acid Anodising & nickel acetate seal </li>
              <li>PS 108 Phosphating (Note: must be below 1450MPa/210 ksi)</li>
              <li>PS 114 Alocrom (Aerospace)</li>
              <li>PS 124 Passivation of Stainless Steel (Aerospace)</li>
              <li>PS 126 Passivation of Stainless Steel (Non-Aerospace)</li>
              <li>PS 127 Alocrom (Non-Aerospace)</li>
            </ul>
            <ul>
              <li>Approval No. PRO 16691H Vendor ID: 5107 Release- SQ93</li>
            </ul>
            <ul>
              <li>PS 117-3 Bonderite S-OT 310B</li>
              <li>PS 117-5 Everlube 620A</li>
              <li>PS 117-6 Everlube 620</li>
              <li>PS 117-7 Everlube 620C</li>
              <li>PS 117-8 Everlube 9002</li>
              <li>
                PS 603 Paint (Superceded by PS618 now only in colour BS381C-676,
                light weatherwork grey)
              </li>
              <li>PS 615 Air Dry Polyurethane</li>
              <li>
                PS 618 Air Dry Epoxide (Colour BS381C-676, light weatherwork
                grey)
              </li>
              <li>PS 622 Air Dry Polyurethane (AV8B)</li>
              <li>PS 631 Paint for Naval Equipment</li>
              <li>PS 635 Polyurethane Paint Scheme</li>
              <li>PS 811 Anti-Tracking Varnish</li>
              <li>PS 4008 Polyurethane Paint Scheme</li>
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

export default Triumph;
