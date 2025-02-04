import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">NewsExplorer</h1>
        <Navigation onSignInClick={onSignInClick} />
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
