import react from "react";
import './link.css'

function Link({ imageSrc, altText, text, link }){

    return(<li className="list-item">
        <img src={imageSrc} alt={altText} className="list-item-image" />
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="list-item-text">
            {text}
          </a>
        ) : (
          <span className="list-item-text">{text}</span>
        )}
      </li>
    );
}
export default Link;