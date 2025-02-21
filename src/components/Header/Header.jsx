import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onSignInClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">NewsExplorer</h1>

        <button
          className="header__menu-icon"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          ☰
        </button>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <button
            className="header__close-button"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ✕
          </button>

          <Navigation onSignInClick={onSignInClick} />
        </nav>
      </div>

      <div className="header__content">
        <h2 className="header__title">
          What's going on in
          <br />
          the world?
        </h2>
        <p className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
    </header>
  );
}

export default Header;
