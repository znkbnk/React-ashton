import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Collins = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>COLLINS AEROSPACE (ex UTC, HAMILTON, FAIREY, CLAVERHAM)</h1>
            <ul>
              <li>Approval No. PQA 290184 Hamilton Sunstrand Aerospace</li>
            </ul>{" "}
            <ul>
              <li>AMS 2400 Cadmium Plating</li>
              <li>AMS 2400 RC40 to RC46 Cadmium Plating</li>
              <li>AMS 2400 Up to RC40 Cadmium Plating</li>
              <li>AMS 2470 Chromic Anodising</li>
              <li>AMS 2471 Sulphuric Anodising</li>
              <li>AMS 2700 Passivation of Corrosion-Resistant Steels</li>
              <li>AMS-A-8625 Anodic Coating for Aluminium (all types)</li>
              <li>AMS-QQ-P-35 Passivation of Corrosion-Resistant Steels</li>
              <li>AMS-QQ-P-416 Cadmium Plating</li>
              <li>ASTM A380 Passivation</li>
              <li>ASTM A380/PN14.10 Passivation</li>
              <li>CPS 1000 Type 1/1B Class 1A Anodising</li>
              <li>CPS 1000 Type 1/1B Class 1B Anodising</li>
              <li>CPS 1000 Type 1/1B Class 1D Anodising</li>
              <li>CPS 1000 Type II Class 1A Anodising</li>
              <li>CPS 1000 Type II Class 1B Anodising</li>
              <li>CPS 1000 Type II Class 1D Anodising</li>
              <li>CPS 1000-01 Anodising</li>
              <li>CPS 1000-01 Type 1 Class 1A Anodising</li>
              <li>CPS 1000-01 Type 1/1B Class 1A Anodising</li>
              <li>CPS 1000-01 Type 1/1B Class 1D Anodising</li>
              <li>CPS 1000-01 Type II Class 1A Anodising</li>
              <li>CPS 1000-01 Type II Class 1D Anodising</li>
              <li>DTD 904 Cadmium Plating</li>
              <li>FEIS 101A Chromic Anodising</li>
              <li>FEIS 101B Sulphuric Anodising</li>
              <li>FEIS 102 Cadmium Plating</li>
              <li>FEIS 105 Phosphate</li>
              <li>FEIS 111 Alocrom 1200</li>
              <li>FEIS 115 Passivation of Corrosion-Resistant Steel</li>
              <li>FEIS 701 Part A Magnetic Flaw Detection</li>
              <li>FEIS 701 Part B Penetrant Flaw Detection</li>
              <li>HDS 1360 -ainting of Components and Assemblies</li>
              <li>HDS 1462 Application of Dry Film Lubricants</li>
              <li>HS 178 CATA Passivation</li>
              <li>HS 240 Class 1A Chemical Conversion of Aluminium</li>
              <li>HS 334 Anodising</li>
              <li>MIL-A-8625 Type 1 Anodising</li>
              <li>MIL-A-8625 Type 1 Class 1 Anodising</li>
              <li>MIL-A-8625 Type 2 Anodising</li>
              <li>MIL-A-8625 Type 2 Class 1 Anodising</li>
              <li>MIL-A-8625 Type 2B Anodising</li>
              <li>MIL-A-8625 Type 2B Class 1 Anodising</li>
              <li>MIL-A-8625 Type 2B Class 2 Anodising</li>
              <li>MIL-A-8625 Type 1B Class 1A Anodising</li>
              <li>MIL-DTL-5541 Type 1 Class 1A Alocrom</li>
              <li>MIL-S-5002 Passivation of Corrosion-Resistant Steel</li>
              <li>PN 14.06-01 Anodise Type 1 & 2</li>
              <li>
                PN 14.06-03 Class 1B Thin Film Anodise & Chromic Seal Only
              </li>
              <li>PN 14.10 Passivation of Corrosion-Resistant Steel</li>
              <li>PN 14.12 Class 1 Alocrom</li>
              <li>PS 100-1 Cadmium Plating</li>
              <li>PS 100-2 Cadmium Plating</li>
              <li>PS 102-1 Chromic Anodising</li>
              <li>PS 102-2 Sulphuric Anodising</li>
              <li>PS 102-4 Sulphuric Anodising</li>
              <li>PS 114 Alocrom</li>
              <li>PS 124 Passivation of Corrosion-Resistant Steel</li>
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

export default Collins;
