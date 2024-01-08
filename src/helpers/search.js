import React, { useState } from "react";

const SearchBar = ({ sections, onSearch, companies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const sectionResults = sections
      .map((section) => {
        const filteredContent = filterContent(
          section.content.props.children,
          term
        );
        return filteredContent.length > 0
          ? { ...section, content: <div>{filteredContent}</div> }
          : null;
      })
      .filter(Boolean);

    const companyResults = companies.filter((company) =>
      company.title.toLowerCase().includes(term)
    );

    setSearchResults([...sectionResults, ...companyResults]);
  };

  const filterContent = (children, term) => {
    return React.Children.toArray(children).flatMap((child) => {
      if (typeof child === "string") {
        return child.toLowerCase().includes(term.toLowerCase()) ? [child] : [];
      } else if (React.isValidElement(child) && child.props.children) {
        return filterContent(child.props.children, term);
      }
      return [];
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(searchResults);
      setSearchTerm("");
    }
  };

  return (
    <div className='search-container'>
      <svg
        className='search-icon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 48 48'
      >
        <path d='M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z'></path>
      </svg>
      <input
        className='search-input'
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
