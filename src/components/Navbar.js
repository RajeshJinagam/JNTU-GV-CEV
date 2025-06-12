// File: src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images.jpg';

export default function Navbar() {
  return (
    <header className="navbar-fixed">
      {/* Top Ribbon */}
      <div className="top-ribbon">
        <img src={logo} alt="JNTU-GV Logo" className="jntu-logo" />
        <div className="university-name">
          JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY - GURAJADA VIZIANAGARAM 
        </div>
      </div>

      {/* Bottom Ribbon */}
      <div className="bottom-ribbon">
        <nav className="navbar-links">
          <ul>
            <li><Link to="hero" smooth={true} offset={-80} duration={500} spy={true} activeClass="active">Home</Link></li>
            <li><Link to="overview" smooth={true} offset={-80} duration={500} spy={true} activeClass="active">Overview</Link></li>
            <li><Link to="modules" smooth={true} offset={-80} duration={500} spy={true} activeClass="active">Modules</Link></li>
            <li><Link to="practicals" smooth={true} offset={-80} duration={500} spy={true} activeClass="active">Practicals</Link></li>
            <li><Link to="capstone" smooth={true} offset={-80} duration={500} spy={true} activeClass="active">Capstone</Link></li>
            <li><Link to="references" smooth={true} offset={-80} duration={500} spy={true} activeClass="active">References</Link></li>
            <li><Link to="contact" smooth={true} offset={-80} duration={500} spy={true} activeClass="active">Contact</Link></li>
            <li><Link to="download" smooth={true} offset={-80} duration={500} spy={true} activeClass="active">Download</Link></li>
            <li><Link to="registration" smooth={true} offset={-80} duration={500} spy={true} activeClass="active">Registration</Link></li>
          </ul>
        </nav>
      </div>
      <div className="nav-hero-separator"></div>
    </header>
  );
}