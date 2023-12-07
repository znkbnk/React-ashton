import React, { useState } from "react";

const SearchBar = ({ sections, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

const handleSearch = () => {
  // Filter sections based on the search term
  const searchResults = sections.map((section) => {
    const filteredContent = React.Children.toArray(section.content.props.children)
      .filter((child) => {
        if (typeof child === 'string') {
          // If the child is a string, check if it includes the search term
          return child.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (React.isValidElement(child) && child.props.children) {
          // If the child is a React element, recursively check its children
          const innerContent = React.Children.toArray(child.props.children);
          return innerContent.some((innerChild) =>
            innerChild.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return false; // Ignore non-string and non-ReactElement children
      });

    // If there are matching paragraphs, return a new section with filtered content
    if (filteredContent.length > 0) {
      return {
        ...section,
        content: <div>{filteredContent}</div>,
      };
    }
    return null; // No matching paragraphs, return null
  }).filter(Boolean); // Remove null entries from the array

  // Pass the search results to the parent component
  onSearch(searchResults);

  setSearchTerm("");
};

  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
