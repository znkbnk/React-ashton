import React from "react";
import { sections } from "../data";
import Footer from "./Footer";

const Testing = () => {
  // Accessing the content property of the first section
  const content = sections[1].content;

  return (
    <div>
      <div className='service-container'>
        <div className='service-cards'>
          <div>
            <h1>NDT</h1>
            <p>{content}</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Testing;