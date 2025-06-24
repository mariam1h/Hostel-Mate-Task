import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';
import { NAV_ITEMS } from '../constants';

/**
 * Header component that displays the main navigation and logo
 * @returns {JSX.Element} The header component with navigation
 */
function Header() {
  return (
    <header className="header">
      <div className="logo-text">
        <img src={logo} alt="Positivus Logo" className="logo-img" />
        <span className="brand-name">Positivus</span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          {NAV_ITEMS.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button className="nav-cta outlined">Request a quote</button>
      </nav>
    </header>
  );
}

export default Header; 