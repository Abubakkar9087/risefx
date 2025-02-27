import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import OurMission from './components/OurMission.js';
import OurServices from './components/OurServices.js';
import WhyRisefx from './components/WhyRisefx.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mission' element={<OurMission />} />
        <Route path='/services' element={<OurServices />} />
        <Route path='/whyrisefx' element={< WhyRisefx />} />
      </Routes>
    </Router>
  );
}

export default App;
