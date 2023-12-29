import React from "react";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const ThirdPartyAccreditationScope = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/Approvals`); // Navigate back to the Approvals page
  };

  return (
    <div>
      <section id='main' class='wrapper'>
        <div className='service-container'>
          <div className='service-cards'>
            <h3>Third Party Accreditation Scope</h3>
            <ul>
              <li>
                Approval No. FM 00236 British Standards/Ministry of Defence
                (Std. B.S.E.N. I.S.O. 9001 & AS9100 Rev. D). Society of British
                Aerospace Companies (AS9100 Rev. D) Nadcap
              </li>
            </ul>
            <ul>
              <li>
                AC 7108 Paint/Dry Film Coatings, Lead Indium Plating, Silver
                Plating, Cadmium plating, Phosphating/Other Conversion Coatings,
                Surface Treatment/Passivation, TCS/PACS, Irridite NCP Anodising
                (SAA, CAA, TSA, TFSAA), Electropolishing, Chemical Cleaning.
              </li>
              <li>AS 7114/1- Penetrant N.D.T.</li>
              <li>AS 7114/2- Magnetic Particle N.D.T.</li>
            </ul>
            <ul>
              <li>
                Federal Aviation Authority (through specific customer approvals
                only)
              </li>
            </ul>
            <ul>
              <li>MILC-5541 - Alocrom 1200</li>
            </ul>
            <ul>
              <li>
                To download copies of our third party accreditation certificates
                please click links below.
              </li>
            </ul>
            <ul>
              <li>
                <a href='https://www.ashton-moore.co.uk/wp-content/uploads/2020/11/AS9100-revD-ex-2023.pdf'>
                  ISO 9001/AS9100
                </a>
              </li>
              <li>
                <a href='https://www.ashton-moore.co.uk/wp-content/uploads/2020/11/14001-cert.pdf'>
                  ISO 14001
                </a>
              </li>
              <li>
                <a href='https://www.ashton-moore.co.uk/wp-content/uploads/2020/06/NADCAP-CP-Cert-6.pdf'>
                  Nadcap Chemical Processing Certificate
                </a>
              </li>
              <li>
                <a href='https://www.ashton-moore.co.uk/wp-content/uploads/2020/11/Nacap-chem-Scope.pdf'>
                  Nadcap Chemical Processing Scope
                </a>
              </li>
              <li>
                <a href='https://www.ashton-moore.co.uk/wp-content/uploads/2020/06/NADCAP-CP-Cert-1.pdf'>
                  Nadcap NDT Certificate
                </a>
              </li>
              <li>
                <a href='https://www.ashton-moore.co.uk/wp-content/uploads/2020/11/Scope-Of-Accreditation-Nadcap-NDT.pdf'>
                  Nadcap NDT Scope
                </a>
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

export default ThirdPartyAccreditationScope;
