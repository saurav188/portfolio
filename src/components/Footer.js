import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../styles/Footer.css';
// import English from '../images/kingdom_united_icon.png';
// import Portuguese from '../images/brazil_icon.png';

function Footer() {
  return ( 
    <footer className="footer-container">
      <div className="links-footer">
        <p>Find me in:</p>
        <a href="https://www.linkedin.com/in/saurav-thakur-b366761b5/" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer"/>
        </a>
        <a href="https://github.com/saurav188" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsGithub className="icon-footer"/>
        </a>
      </div>
      
      {/* <p className="text-footer">Desenvolvido com ❤ por Thiago Nóbrega</p> */}
      {/* <select className="select-language">
        <option>🇧🇷 pt-BR</option>
        <option>🇺🇸 en-US</option>
      </select> */}
    </footer>
  );
}

export default Footer;