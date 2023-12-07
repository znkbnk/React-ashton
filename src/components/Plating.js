import React from "react";
import sections from "../data";

const Plating = () => {
  // Accessing the content property of the first section
  const content = sections[4].content;

  return (
    <div>
      <h1>Plating</h1>
      <p>{content}</p>
    </div>
  );
};

export default Plating;
