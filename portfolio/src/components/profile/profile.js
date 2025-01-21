import React from 'react';
import './profile.css'
import Link from '../link/link.js';
function Profile() {
  return (
    <div className="profile-container">
      <h2>Kazi Takia Talha</h2>
      <div className='typewriter'>
      <p>CS Student, Teaching Assistant, ML Developer</p>
      </div>
      <ul className="profile-details">
        <Link
          imageSrc="./location.png"
          altText="Location"
          text="Mississauga, Toronto"
        />
        <Link
          imageSrc="./graduation.png"
          altText="University"
          text="University of Toronto"
        />
        <Link
          imageSrc="./email.png"
          altText="Email"
          text="Email"
          link="mailto:takia.talha@mail.utoronto.ca"
        />
        <Link
          imageSrc="./github.png"
          altText="GitHub"
          text="GitHub"
          link="https://github.com/TakiaTalha"
        />
        <Link
          imageSrc="/linkedin.png"
          altText="LinkedIn"
          text="LinkedIn"
          link="https://www.linkedin.com/in/kazi-takia-talha-27ab03253"
        />
      </ul>
      <div className="resume-container">
        <a href="/Kazi_Takia_Talha_Resume.pdf" download="Kazi_Takia_Talha_Resume.pdf">
          <div className="resume-button">
            Download Resume
          </div>
        </a>
      </div>
      <div class="container">
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
 </div>
    </div>
  );
}

export default Profile;
