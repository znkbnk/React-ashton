import React from "react";
import "../Cards.css";
import { NavLink } from "react-router-dom";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const Services = ({ sections }) => {
   
  return (
    <div>
      <ScrollToTopOnMount />

      
      <div>
        <h1>Services</h1>
      </div>
      <div>
        <ul className='cards-container'>
          {sections.map((section, index) => (
            <li key={index} className='cards'>
              <div className='content'>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <NavLink to={`/Services${section.linkTo}`} className='navlink'>
                  Read More
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
