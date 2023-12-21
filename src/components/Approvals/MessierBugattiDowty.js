import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


const Messier = () => {
   const navigate = useNavigate();

   const handleBack = () => {
     navigate(`/Approvals`); // Navigate back to the Approvals page
   };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Messier Bugatti Dowty (Safran)</h1>
            <ul>
              <li>
                Approval No. MDM 520746 Release- PRIDE or SCREQ-001-PRIDE or
                GRP-0087 (Flaw Detect Requirements as per Drawing/Order/Layout)
              </li>
            </ul>
            <ul>
              <li>AMS 2700 Passivation of Stainless Steels</li>
              <li>M-DLPS 102 Anodising of Aluminium and Aluminium Alloys</li>
              <li>M-DLPS 117-4 Solid Film Lubricant- Xylan 1010</li>
              <li>
                M-DLPS 117-5 Solid Film Lubricant- Everlube 620A Dry Film
                Lubricant
              </li>
              <li>M-DLPS 207 Cleaning and Pre-Treatments</li>
              <li>M-DLPS 615 Air Drying Epoxide Polyurethane Paint Schemes</li>
              <li>M-DLPS 618 Air Drying Epoxide Paint Scheme</li>
              <li>
                MIL-A-8625 Anodising- Chromic and Sulphuric (Type I and II)
              </li>
              <li>
                PCS 2101 Cadmium Plating (less than 1370 MPa as minimum tensile
                strength)
              </li>
              <li>
                PCS 2220 Protective Chemical Treatment of Aluminium- Local
              </li>
              <li>PCS 2500 Polyurethane Paint</li>
              <li>PCS 2530 Polyurethane Paint (low voc.)</li>
              <li>PCS 2610 Dry Grit Blasting with Aluminium Oxide</li>
              <li>PCS 2620 Hot Degreasing</li>
              <li>PCS 2700 Paint Stripping</li>
              <li>PCS 2800 Temporary Corrosion and Damage Protection</li>
              <li>
                PCS 3002 Penetrant Inspection- Inspection of Ground Chromium
                Surfaces. Use PE pen only.
              </li>
              <li>
                PCS 3100 Magnetic Flaw Detection (can do AV8B parts [PS923]) MPI
                before and after Cadmium for 787 Boeing programme parts
              </li>
              <li>
                PCS 3200 Penetrant Flaw Detection (can do AV8B parts [PS923]) In
                service and repair parts require Level 3 Penetrant
              </li>
              <li>PCS 6000 Marking of Materials, Parts and Assemblies</li>
              <li>
                PS 923 Manufacturing Requirements for Messier-Dowty AV8B
                Aircraft Parts
              </li>
              <li>
                PS 3213 Cleaning of Component Surfaces by Hand Swab or Immersion
              </li>
            </ul>
            <ul>
              <li>
                Messier Services Release MS UK 36 Approval No. 5107 Approvals As
                Per Messier-Dowty But Released to MSUK36 In Place of PRIDE
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

export default Messier;
