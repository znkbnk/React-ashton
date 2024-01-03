import React from "react";
import {sections} from "../data";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const Plating = () => {
  const content = sections[4].content;

  return (
    <div>
      <ScrollToTopOnMount />

      <div className='service-container'>
        <div className='service-cards'>
          <h1>Plating</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Plating;
