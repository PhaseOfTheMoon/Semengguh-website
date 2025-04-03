import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Phone Number: +601234567</p>
          <p>Email Address: terraguide@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Address</h3>
          <p>NBK Phase 2, The Northbank, GROUND FLOOR, Salak 22 (SL 22/4866, 93050 Kuching)</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="#"><i className="fa-brands fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2024 TerraGuide. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;