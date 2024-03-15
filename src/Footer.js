import React from 'react';
import { FaInstagram, FaLinkedin, FaGraduationCap, FaTwitter, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className='footer-text'>
        <p>SJB Institute of Technology </p>
        <p>
          BGS Health & Education City, Dr. Vishnuvardhan Road, Kengeri, Bengaluru – 560060 Karnataka, INDIA.
        </p>
        <p>
          Phone: +91-80-28612445 / 46 | Fax: +91-80-28612651
        </p>
        <p>
          <a href="https://www.google.com/maps/place/SJB+Institute+of+Technology/@12.899884,77.495788,16z/data=!4m6!3m5!1s0x3bae3f15cd2b48fb:0x46277e17c8b2ccc3!8m2!3d12.8998841!4d77.4957882!16s%2Fm%2F0cr39rn?hl=en&entry=ttu">View location on Google Maps</a>
        </p>
      </div>
      <div className='social-links'>
        <a href="https://sjbit.edu.in/"><FaGraduationCap /></a>
        <a href="https://www.linkedin.com/school/sjbitbengaluru/"><FaLinkedin /></a>
        <a href="https://twitter.com/BengaluruSjbit"><FaTwitter /></a>
        <a href="https://www.facebook.com/people/Sjbit-Bengaluru/pfbid06imvSFfB3kHyv55XseDS5PZDUmjDBqRtasZGteVZpjNesSeagPZkiv3y33CeH8Wrl/"><FaFacebook /></a>
      </div>
      
    </div>
  );
}

export default Footer;
