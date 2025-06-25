import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { TooltipProvider } from "./components/ui/tooltip";
import BackToTop from "./components/BackToTop";

import "./App.css";

function App() {
  return (
    <TooltipProvider>
      <>
        <Navbar />
        <div style={{ height: 120 }}></div>
        <Hero />
        <AboutMe />
        <Project />
        <Tech />
        <Certifications />
        <Experience />
        <Contact />
        <BackToTop />
      </>
    </TooltipProvider>
  );
}

export default App;
