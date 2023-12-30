import React, { useEffect } from "react";
import "../Cards.css";
import { NavLink } from "react-router-dom";
import video from "../images/video.mp4";

const Services = ({ sections }) => {
   useEffect(() => {
     // Scroll to the top of the page when the component mounts
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <div className='video-container'>
        <video autoPlay loop muted>
          <source className='home-video' src={video} type='video/mp4' />
        </video>
      </div>
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
