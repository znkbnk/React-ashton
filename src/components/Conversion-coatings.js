import React from "react";
import sections from "../data";
import Footer from "./Footer";

const Conversion = () => {
  // Accessing the content property of the first section
  const content = sections[3].content;

 return (
   <div className='service-container'>
     <div className='service-cards'>
       <h1>Conversion</h1>
       <p>{content}</p>
     </div>
     <Footer />
   </div>
 );
};

export default Conversion;
