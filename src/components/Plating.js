import React from "react";
import {sections} from "../data";
import Footer from "./Footer";

const Plating = () => {
  const content = sections[4].content;

  return (
    <div>
      <div className='service-container'>
        <div className='service-cards'>
          <h1>Plating</h1>
          <p>{content}</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Plating;
