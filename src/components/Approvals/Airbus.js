import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Airbus = () => {

    const navigate = useNavigate();

    const handleBack = () => {
      navigate(`/Approvals`); // Navigate back to the Approvals page
    };

  return (
    <div>
      <section>
        <div className='service-container'>
          <div className='service-cards'>
            <h1>Airbus UK</h1>
            <ul>
              <li>Approval No. 97560/04</li>
            </ul>
            <ul>
              <li>
                ABP 1-1023 (AIPS02-01-001) Chromic Acid Anodising - PFD -If
                required by Order/Drawing/Eng. Route. Where drawing calls for
                ABP1-1023 then Tartaric Sulphuric Anodising shall be used. Where
                drawing mentions Chromic Anodise then the customer must confirm
                whether Chromic or Tartaric Sulphuric Anodising is to be used.
              </li>
            </ul>
            <ul>
              <li>ABP 1-1024 Sulphuric Acid Anodising</li>
              <li>ABP 1-5056 Phosphating of Steel</li>
              <li>
                ABP 4-1121 Application of Bonding Primer as an Erosion Resistant
                Coating
              </li>
              <li>ABP 4-1123 Application of Cold Cured Adhesion Primer</li>
              <li>ABP 4-2133 Application of Erosion Resistant Paints</li>
              <li>
                ABP4-2124 Application and Stoving of Abrasion Resistant Coatings
              </li>
              <li>ABP4-2126 Application and Stoving of Polyurethane</li>
              <li>
                ABP4-2127 Application of Polyurethane to External Surfaces
              </li>
              <li>ABP4-2128 Application of External Paints</li>
              <li>ABP4-2130 Application of Flexible Permeable Coatings</li>
              <li>
                ABP4-2131 Application and Stoving of High Temperature Stoving
                Enamel on Steel
              </li>
              <li>
                ABP8-1296 De-Oxidation of Aluminium Alloys{" "}
                <b>(as part of AIPS 02-01-003)</b>
              </li>
              <li>
                ABP8-2301 Pickling of Aluminium for Metal Removal{" "}
                <b>(as part of AIPS 02-01-003)</b>
              </li>
              <li>ABP 9-3323 Ink Marking</li>
              <li>AIPS 02-01-003 Tartaric Sulphuric Acid Anodising</li>
              <li>
                <b>
                  (2024 and 7075 parts which are to be painted or have chromic
                  seal post treatment)
                </b>
              </li>
              <li>
                AIPS 02-05-001 Chemical Conversion Coating{" "}
                <b>(immersion process only)</b>
              </li>
              <li>
                AIPS 05-02-003 Application of External Paint Systems{" "}
                <b>(varnish application for ink marking only)</b>
              </li>
              <li>
                AIPS 05-02-009 Application of Structural Paints{" "}
                <b>(metallic parts only)</b>
              </li>
              <li>ABP 6-5229 Magnetic Particle Flaw Detection</li>
              <li>ABP 6-5230 Penetrant Flaw Detection</li>
              <li>AITM6-1001 Penetrant Flaw Detection</li>
              <li>
                AITM6-6006 Measuring Coating Thickness by Magnetic or Eddy
                Current
              </li>
              <li>AITM6-9004 Inspection of Surface Resistance</li>
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

export default Airbus;
