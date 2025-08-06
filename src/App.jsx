import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const Menu = () => <h1>Menu</h1>;
const Concept = () => <h1>Concept</h1>;
const Gallery = () => <h1>Galerie</h1>;
const Contact = () => <h1>Contact</h1>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );A
}

export default App;
