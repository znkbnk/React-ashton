import React from "react";
import sections from "../data";

const Conversion = () => {
  // Accessing the content property of the first section
  const content = sections[3].content;

  return (
    <div>
      <h1>Conversion</h1>
      <p>{content}</p>
    </div>
  );
};

export default Conversion;
