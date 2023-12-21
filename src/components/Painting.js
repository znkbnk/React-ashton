import React from "react";
import { sections } from "../data";
import Footer from "./Footer";

const Painting = () => {
  const content = sections[2].content;

  return (
    <div>
      <div className='service-container'>
        <div className='service-cards'>
          <h1>Painting</h1>
          <p>{content}</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Painting;
