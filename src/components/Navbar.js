import React, { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import './Navbar.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ theme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const themeToggleLabel = `Switch to ${nextTheme} mode`;

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a className="navbar-brand" href="#home" onClick={() => setIsOpen(false)}>Sharvan<span>.</span></a>
        <nav id="primary-navigation" className={`navbar-menu${isOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setIsOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
        <div className="navbar-controls">
          <button
            className="theme-toggle"
            type="button"
            aria-label={themeToggleLabel}
            title={themeToggleLabel}
            aria-pressed={theme === 'dark'}
            onClick={() => onThemeChange(nextTheme)}
          >
            {theme === 'dark' ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
          </button>
          <button
            className="mobile-toggle"
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
