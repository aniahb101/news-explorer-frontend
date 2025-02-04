import React from "react";
import "./Navigation.css";

function Navigation({ onSignInClick }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <button className="navigation__button" onClick={onSignInClick}>
            Sign In
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
