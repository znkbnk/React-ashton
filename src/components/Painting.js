import React from "react";
import { sections } from "../data";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const Painting = () => {
  const content = sections[2].content;

  return (
    <div>
      <ScrollToTopOnMount />

      <div className='service-container'>
        <div className='service-cards'>
          <h1>Painting</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Painting;
