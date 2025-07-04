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
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ui/theme-provider";
import ThemeToggle from "./components/ui/theme-toggle";
import MobileMenuOverlay from "./components/MobileMenuOverlay";

import "./App.css";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <ThemeProvider>
      <TooltipProvider>
        <>
          <Navbar onMobileMenuOpen={() => setMobileOpen(true)} />
          <MobileMenuOverlay
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
          />
          <ThemeToggle />
          {/* <div style={{ height: 55 }}></div> */}
          <Hero />
          <AboutMe />
          <Project />
          <Tech />
          <Certifications />
          <Experience />
          <Contact />
          <Footer />
          <BackToTop />
        </>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
