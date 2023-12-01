import React from "react";
import {
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
        <Route path='/Home' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Aprovals' element={<Aprovals />} />
        <Route path='/Legals' element={<Legals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
