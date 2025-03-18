import React from "react";
import "./Footer.css";
import facebookIcon from "../../images/facebook.png";
import gitIcon from "../../images/gitvector.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__text-links">
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
        </div>
        <div className="footer__icons">
          <a
            href="https://github.com/aniahb101"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitIcon} alt="GitHub" className="footer__icon" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" className="footer__icon" />
          </a>
        </div>
      </div>
      <p className="footer__text">
        &copy; 2025 News Explorer. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
