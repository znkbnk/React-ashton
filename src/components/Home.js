import React from "react";
import "../Cards.css";
import { NavLink } from "react-router-dom";

const Home = ({ sections }) => {
  return (
    <div>
      <ul className='cards-container'>
        {sections.map((section, index) => (
          <li key={index} className='cards'>
            <div className='content'>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <NavLink to={section.linkTo} className='navlink'>
                Read More
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
