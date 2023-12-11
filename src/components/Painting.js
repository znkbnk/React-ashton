import React from "react";
import sections from "../data";
import Footer from "./Footer";

const Painting = () => {
  // Accessing the content property of the first section
  const content = sections[2].content;

  return (
    <div className='service-container'>
      <div className='service-cards'>
        <h1>Painting</h1>
        <p>{content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Painting;
