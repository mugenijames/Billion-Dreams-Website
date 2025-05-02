import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50); // Check if scroll position is > 50px
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${sticky ? 'dark-nav' : ''}`}>
      <a href="#" className="logo-link">
        <img className="logo" src={logo} alt="Logo" />
      </a>
      
      {/* Hamburger menu button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation links */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>Who We Are</a></li>
        <li><a href="#team" onClick={handleLinkClick}>Our Team</a></li>
        <li><a href="#services" onClick={handleLinkClick}>Our Services</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#testimonials" onClick={handleLinkClick}>Testimonials</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Reach Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
