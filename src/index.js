import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LanguageProvider } from "./utils/context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Router>
         <LanguageProvider>
            <Header />
            <Routes>
               <Route path="/" element={<Hero />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </LanguageProvider>
      </Router>
   </React.StrictMode>
);
