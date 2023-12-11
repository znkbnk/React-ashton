import React from "react";
import Footer from "./Footer";

const SearchResults = ({ results }) => {
  return (
    <div>
      <div className='search-results'>
        <h2>Search Results:</h2>
        {results.map((result, index) => (
          <div key={index} className='searchResult'>
            <h2>{result.title}</h2>
            <p>{result.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
