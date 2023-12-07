import React from "react";
import sections from "../data";

const Painting = () => {
  // Accessing the content property of the first section
  const content = sections[2].content;

  return (
    <div>
      <h1>Painting</h1>
      <p>{content}</p>
    </div>
  );
};

export default Painting;
