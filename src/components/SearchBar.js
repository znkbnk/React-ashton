import React, { useState } from "react";

const SearchBar = ({ sections, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Filter sections based on the search term
    const searchResults = sections
      .map((section) => {
        const filteredContent = React.Children.toArray(
          section.content.props.children
        ).filter((child) => {
          if (typeof child === "string") {
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
      })
      .filter(Boolean); // Remove null entries from the array

    // Pass the search results to the parent component
    onSearch(searchResults);

    setSearchTerm("");
  };

  const handleKeyDown = (e) => {
    // Trigger search if the Enter key is pressed
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='search-container'>
      <svg
        className='search-icon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 48 48'
      >
        <path d='M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z'></path>{" "}
      </svg>
      <input
        className='search-input'
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
