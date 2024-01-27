import React from "react";
import {sections} from "../data";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const Conversion = () => {
  // Accessing the content property of the first section
  const content = sections[3].content;

 return (
   <div>
     <ScrollToTopOnMount />

     <div className='service-container'>
       <div className='service-cards'>
         <h1>Conversion</h1>
         <p>{content}</p>
       </div>
     </div>
   </div>
 );
};

export default Conversion;
