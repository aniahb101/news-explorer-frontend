import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__button">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
