// App.js
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Home from "./components/Home";
import Legals from "./components/Legals";
import Anodising from "./components/Anodising";
import Testing from "./components/Testing";
import Painting from "./components/Painting";
import Conversion from "./components/Conversion-coatings";
import Plating from "./components/Plating";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Reach from "./components/Reach";
import Approvals from "./components/Approvals";
import { sections, companies } from './data';

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
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services sections={sections} />} />
        <Route path='/Approvals' element={<Approvals />} />

        {companies.map((company) => (
          <Route
            key={company.title}
            path={`/Approvals/${company.title.toLowerCase()}`}
            element={company.description}
          />
        ))}

        <Route path='/Legals' element={<Legals />} />
        <Route path='/Services/Anodising' element={<Anodising />} />
        <Route path='/Services/Testing' element={<Testing />} />
        <Route path='/Services/Painting' element={<Painting />} />
        <Route path='/Services/Conversion-coatings' element={<Conversion />} />
        <Route path='/Services/Plating' element={<Plating />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Reach' element={<Reach />} />

        <Route
          path='/SearchResults'
          element={<SearchResults results={searchResults} />}
        />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
