import React from "react";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const SearchResults = ({ results }) => {
  return (
    <div>
      <ScrollToTopOnMount />

      <div className='search-results'>
        <h1>Search Results:</h1>
        {results.map((result, index) => (
          <div key={index} className='searchResult'>
            <h3>{result.title}</h3>
            <p>{result.content}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
