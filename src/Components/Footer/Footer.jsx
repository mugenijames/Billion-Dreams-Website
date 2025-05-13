import React from 'react';
import './Footer.css';  // Import the Footer styles

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-logo">Okida Builders Ltd.</h3>
          <p className="footer-description">
            Providing quality construction services for over 20 years.
          </p>
        </div>
        <div className="footer-middle">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li><strong>Email:</strong> jamesokida90@gmail.com</li>
            <li><strong>Phone:</strong> (+254) 7-8067-8900</li>
            <li><strong>Address:</strong> 123 Construction Lane, Build City, BC 56789</li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Follow Us</h4>
          <ul className="footer-social">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">X</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Okida Builders Lmt. All rights reserved.</p>
      </div>
    </footer>
  );
}
