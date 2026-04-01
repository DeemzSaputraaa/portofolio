import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Portfolio.</div>
        <div className="footer-copyright">
          &copy; {year} Built with React. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
