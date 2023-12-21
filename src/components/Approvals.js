import React from "react";
import Footer from "./Footer";
import { approvalComponents } from "../data";
import { Link } from "react-router-dom";

const Approvals = () => {
  const approvalList = Object.keys(approvalComponents);



  return (
    <div>
      <h1>Approvals</h1>
      <h3>For individual scopes click relevant name</h3>

      <div className='service-container'>
        <div className='service-cards'>
          <ul>
            {approvalList.map((approval) => (
              <li key={approval}>
                <Link to={`/Approvals/${approval}`}>{approval}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Approvals;
