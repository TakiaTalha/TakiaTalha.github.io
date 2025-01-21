import React from 'react';
import './card.css';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card-container">
      {/* Left section with black background */}
      <div className="card-left">
        <img src={image} alt={title} className="card-image" />
        <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>

      {/* Right section with content */}
      <div className="card-right">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;


