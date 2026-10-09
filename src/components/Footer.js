import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <a className="footer-brand" href="#home">Sharvan<span>.</span></a>
      <p>Designed and built with care.</p>
      <a href="#home">Back to top ↑</a>
      <small>© {new Date().getFullYear()} Sharvan</small>
    </div>
  </footer>
);

export default Footer;
