import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({ onSearch }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">NewsExplorer</h1>
        <Navigation />
      </div>
      <div className="header__content">
        <h2 className="header__title">
          What's going on
          <br />
          in the world?
        </h2>
        <p className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm onSearch={onSearch} />
    </header>
  );
}

export default Header;
