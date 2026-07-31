import React, { useState, useEffect } from 'react';
import Header from './components/header/header'
import Home from './pages/home/home';
import Experience from './pages/experience/experience';
import Project from './pages/project/project';
import Footer from './components/footer/footer'; 
import Profile from './components/profile/profile'

import './App.css'; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className='whole'>
    <div className='header'>
    <Header />
    </div>
      <div className={`content ${isSidebarOpen ? '' : 'sidebar-collapsed'}`}>
        <div className={`profile-sec ${isSidebarOpen ? '' : 'collapsed'}`}>
          <button
            className='sidebar-toggle'
            onClick={() => setIsSidebarOpen((open) => !open)}
            aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            aria-expanded={isSidebarOpen}
          >
            <span className='sidebar-toggle-icon'>{isSidebarOpen ? '‹' : '›'}</span>
          </button>
          <div className='profile-wrapper reveal'>
            <Profile/>
          </div>
        </div>
        <div className='page-sec'> 
          <section id="home" className='reveal'><Home/></section>
          <section id="experience" className='reveal'><Experience/></section>
          <section id="projects" className='reveal'><Project/></section>
        </div>
      </div>
      <div className='footer'> <Footer /></div>
    </div>
  );
}

export default App;
