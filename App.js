// App.js
import React, { useEffect } from 'react';
import './components/style.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  useEffect(() => {
    console.log("Portfolio Loaded");
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
    });
  };
   

  
  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
