import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Home from "./components/Home";
import Aprovals from "./components/Aprovals";
import Legals from "./components/Legals";
import sections from "./data";
import Anodising from "./components/Plating";
import Testing from "./components/Testing";
import Painting from "./components/Painting";
import Conversion from "./components/Conversion-coatings";
import Plating from "./components/Plating";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (results) => {
    setSearchResults(results);
    // Navigate to the SearchResults route
    navigate("/SearchResults");
  };

  return (
    <div>
      <Navbar setSearchResults={handleSearch} />

      <Routes>
        {/* Set Home as the main page */}
        <Route path='/' element={<Home sections={sections} />} />

        <Route path='/Services' element={<Services />} />
        <Route path='/Aprovals' element={<Aprovals />} />
        <Route path='/Legals' element={<Legals />} />
        <Route path='/Anodising' element={<Anodising />} />
        <Route path='/Testing' element={<Testing />} />
        <Route path='/Painting' element={<Painting />} />
        <Route path='/Conversion-coatings' element={<Conversion />} />
        <Route path='/Plating' element={<Plating />} />
        <Route
          path='/SearchResults'
          element={<SearchResults results={searchResults} />}
        />
      </Routes>
    </div>
  );
};

export default App;
