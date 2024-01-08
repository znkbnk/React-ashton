import React from "react";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ results }) => {
  const navigate = useNavigate();

 const handleGoBack = () => {
   navigate("/#");
 };

  return (
    <div>
      <ScrollToTopOnMount />

      <div className='search-results'>
        <h1>Search Results:</h1>
        <button onClick={handleGoBack} className='search-back-button'>
          Back
        </button>
        {results.map((result, index) => (
          <div key={index} className='searchResult'>
            <h3>{result.title}</h3>
            {result.description && <p>{result.description}</p>}
            {result.content && <p>{result.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
