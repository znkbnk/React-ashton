/* eslint-disable no-unused-vars */



// App.js
import React, { useState } from "react";
import TypoHandler from "./TypoHandler";

const App = () => {
  const expectedKeywords = ["react", "javascript", "component", "string"];
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <h1>Typo Handling with string-similarity</h1>
      <TypoHandler expectedKeywords={expectedKeywords} userInput={userInput} />
    </div>
  );
};

export default App;



