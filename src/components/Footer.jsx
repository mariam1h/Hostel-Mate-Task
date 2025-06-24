import React from 'react';
import './Footer.css';
import logo from '../assets/logo.svg';
import linkedinIcon from '../assets/linkedin.png';
import facebookIcon from '../assets/facebook.png';
import xIcon from '../assets/X.png';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="footer-logo-row">
          <img src={logo} alt="Positivus Logo" className="footer-logo-img" />
          <span className="footer-logo-text">Positivus</span>
        </div>
        <ul className="footer-nav">
          {NAV_ITEMS.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn" className="footer-social-icon">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
          </a>
          <a href="#" aria-label="Facebook" className="footer-social-icon">
            <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
          </a>
          <a href="#" aria-label="Twitter/X" className="footer-social-icon">
            <img src={xIcon} alt="Twitter/X" className="social-icon-img" />
          </a>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="footer-col footer-col-left">
          <div className="footer-contact">
            <div className="footer-contact-label">Contact us:</div>
            <div className="footer-contact-item">
              <span className="footer-contact-type">Email: </span>
              <span className="footer-email-highlight">{CONTACT_INFO.email}</span>
            </div>
            <div className="footer-contact-item">Phone: {CONTACT_INFO.phone}</div>
            <div className="footer-contact-item">
              Address: {CONTACT_INFO.address.street}<br/>{CONTACT_INFO.address.city}
            </div>
          </div>
        </div>
        <div className="footer-col footer-col-right">
          <div className="footer-newsletter">
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input type="email" className="newsletter-input" placeholder="Email" />
              <button className="newsletter-btn">Subscribe to news</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <a href="#" className="footer-privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer; 