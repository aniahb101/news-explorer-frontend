import React from "react";
import "./Footer.css";
import facebookIcon from "../../images/facebook.png";
import gitIcon from "../../images/gitvector.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; 2025 News Explorer. All rights reserved.
      </p>
      <div className="footer__links">
        <a href="/" className="footer__link">
          Home
        </a>
        <a
          href="https://tripleten.com"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          TripleTen
        </a>
        <a
          href="https://github.com/aniahb101"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitIcon} alt="GitHub" className="footer__icon" />
        </a>
        <a
          href="https://www.facebook.com"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" className="footer__icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
