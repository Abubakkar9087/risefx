import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import AboutPage from './components/AboutPage.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
