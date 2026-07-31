import React, { useState, useEffect } from 'react';
import './header.css';

// Night is considered 7:00 PM (19:00) through 6:59 AM in the visitor's local time.
const isNightTime = () => {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 7;
};

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // A manual choice always wins; otherwise fall back to the local time of day.
    const stored = localStorage.getItem('darkMode');
    if (stored === 'enabled') return true;
    if (stored === 'disabled') return false;
    return isNightTime();
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the catalog menu is open
  const [activeSection, setActiveSection] = useState('home'); // Currently visible section

  useEffect(() => {
    // Apply the dark mode class on mount
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Auto-follow the local time unless the visitor has manually chosen a mode.
    const stored = localStorage.getItem('darkMode');
    if (stored === 'enabled' || stored === 'disabled') return;

    const applyTimeMode = () => setIsDarkMode(isNightTime());
    applyTimeMode();
    const intervalId = setInterval(applyTimeMode, 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const sections = ['home', 'experience', 'projects']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              Projects
            </a>
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
