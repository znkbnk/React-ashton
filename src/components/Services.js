import React from "react";
import "../Cards.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import video from "../images/video.mp4";

const Services = ({ sections }) => {
  return (
    <div>
      <div className='video-container'>
        <video autoPlay loop muted>
          <source className='home-video' src={video} type='video/mp4' />
        </video>
      </div>
      <div>
        <h2>Services</h2>
      </div>
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

      <Footer />
    </div>
  );
};

export default Services;
