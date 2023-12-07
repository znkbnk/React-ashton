import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {results.map((result, index) => (
        <div key={index}>
          <h3>{result.title}</h3>
          <p>{result.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
