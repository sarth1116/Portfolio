// components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensures Bootstrap JS and Popper.js are included

function Navbar({ scrollToSection }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ background: 'linear-gradient(90deg, #000, #92816c)' }}>
      <a className="navbar-brand" href="#home">
        <span style={{ color: '#ff9800', marginLeft: '5vh' }}>Sarthak</span> Lahare
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home" onClick={() => scrollToSection('home')}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about" onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#social" onClick={() => scrollToSection('social')}>Social</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
