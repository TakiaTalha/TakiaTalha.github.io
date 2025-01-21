import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/header'
import Home from './pages/home/home';
import Experience from './pages/experience/experience';
import Project from './pages/project/project';
import Footer from './components/footer/footer'; 
import Profile from './components/profile/profile'

import './App.css'; 

function App() {
  return (
    <div className='whole'>
    <Router>
    <div classname = 'header'>
    <Header />
    </div>
      <div className='content'>
        <div className='profile-sec'> <Profile/> </div>
        <div className='page-sec'> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        </div>
      </div>
      <div className='footer'> <Footer /></div>
      </Router>
    </div>
  );
}

export default App;
