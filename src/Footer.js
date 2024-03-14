import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className='footer-text'>
        <p>Designed and developed by ULLAS H P</p>
      </div>
      <div className='social-links'>
        <a href="https://www.instagram.com"><FaInstagram /></a>
        <a href="https://www.linkedin.com"><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default Footer;
