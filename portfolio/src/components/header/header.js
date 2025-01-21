import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved mode
    return localStorage.getItem('darkMode') === 'enabled';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the catalog menu is open

  useEffect(() => {
    // Apply the dark mode class on mount
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
      return newMode;
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu visibility
  };

  return (
    <header className="header-c">
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          {/* Hamburger icon */}
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
        </ul>
        <div
          className="dark-mode-toggle-container"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          <div className={`dark-mode-toggle ${isDarkMode ? 'dark' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
