import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  // Effect to handle scroll event and update sticky state
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50); // Check if scroll position is > 50px
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
      <ul className={`${menuOpen ? 'active' : ''}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">Who We Are</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Reach Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
