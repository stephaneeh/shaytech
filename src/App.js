import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import {NextUIProvider} from "@nextui-org/react";

// import logo from './assets/logos/bgBlack_blue.png'
import './App.css';
import "./style/app.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <NextUIProvider>
      <Navbar />
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
