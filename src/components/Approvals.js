import React from "react";
import { companies } from "../data";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const Approvals = () => {
 

  return (
    <div>
      <ScrollToTopOnMount />
      <h1>Approvals</h1>
      <h3>For individual scopes click relevant name</h3>

      <div className='service-container'>
        <div className='service-cards'>
          <ul>
            {companies.map((company) => (
              <li key={company.title}>
                <Link to={`/Approvals/${company.title.toLowerCase()}`}>
                  {company.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Approvals;
