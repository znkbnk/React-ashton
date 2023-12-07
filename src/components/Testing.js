import React from "react";
import sections from "../data";

const Testing = () => {
  // Accessing the content property of the first section
  const content = sections[1].content;

  return (
    <div>
      <h1>NDT</h1>
      <p>{content}</p>
    </div>
  );
};

export default Testing;
