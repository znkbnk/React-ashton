import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Home from "./components/Home";
import Aprovals from "./components/Aprovals";
import Legals from "./components/Legals";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Services />} />
        <Route path='/' element={<Aprovals />} />
        <Route path='/' element={<Legals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
