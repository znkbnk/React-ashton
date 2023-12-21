import React from "react";
import { sections } from "../data";
import Footer from "./Footer";

const Anodising = () => {
  const content = sections[0].content;

  return (
    <div>
      <div className='service-container'>
        <div className='service-cards'>
          <h1>Anodising</h1>
          <p>{content}</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Anodising;
