import React from "react";
import { sections } from "../data";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const Anodising = () => {
  const content = sections[0].content;

  return (
    <div>
      <ScrollToTopOnMount />

      <div className='service-container'>
        <div className='service-cards'>
          <h1>Anodising</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Anodising;
