import React, { useEffect } from "react";
import Footer from "./Footer";
import { companies } from "../data";
import { Link } from "react-router-dom";

const Approvals = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
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

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Approvals;
