import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({ onSignInClick, onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignInClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
    onSignInClick();
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">NewsExplorer</h1>

        {!isMobile && (
          <div className="header__nav-desktop">
            <a href="/" className="header__nav-link">
              Home
            </a>
            <button className="header__nav-button" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
        )}

        {isMobile && (
          <button
            className="header__menu-icon"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            =
          </button>
        )}

        {isMobile && (
          <div
            className={`header__overlay ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          ></div>
        )}

        {isMobile && (
          <nav
            className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          >
            <button
              className="header__close-button"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              ✕
            </button>

            <h1 className="header__logo header__logo--menu">NewsExplorer</h1>

            <Navigation onSignInClick={handleSignInClick} />
          </nav>
        )}
      </div>
      <div className="header__content">
        <h2 className="header__title">
          What's going on in <br /> the world?
        </h2>
        <p className="header__subtitle">
          Find the latest news on any topic and save them in your
          <span className="header__subtitle--mobile-break">
            {" "}
            personal account.
          </span>
        </p>

        <SearchForm onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Header;
