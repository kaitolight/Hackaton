import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Research from "./pages/Research";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <title> Air / Concept | Accueil </title>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Research" element={<Research />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
