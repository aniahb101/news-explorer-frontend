import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsCardList from "../NewsCardList/NewsCardList";
import { LogOut } from "lucide-react";
import "./ProfilePage.css";

function ProfilePage({ savedArticles }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const articleCount = savedArticles.length;
  const keywordList = ["Lace", "Embroidery", "Apple", "Lolita"];

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-page__wrapper">
        <header className="profile-header">
          <div className="profile-header__container">
            <h1 className="profile-header__logo">NewsExplorer</h1>

            <button className="profile-header__menu-icon" onClick={toggleMenu}>
              =
            </button>

            <nav
              className={`profile-header__nav ${
                isMenuOpen ? "profile-header__nav--open" : ""
              }`}
            >
              <button
                className="profile-header__close-button"
                onClick={toggleMenu}
              >
                ✕
              </button>

              <a href="/" className="profile-header__link" onClick={toggleMenu}>
                Home
              </a>

              <a
                href="/saved-articles"
                className="profile-header__link profile-header__saved"
              >
                Saved Articles
              </a>

              <div className="profile-header__user" onClick={handleLogout}>
                <span className="profile-header__name">Aniah</span>
                <LogOut className="profile-header__logout-icon" />
              </div>
            </nav>
          </div>
        </header>

        <main className="profile-main">
          <div className="profile-main__info-wrapper">
            <h2 className="profile-main__title">Saved Articles</h2>

            <div className="profile-main__summary">
              <h1 className="profile-main__saved-count">
                Aniah, you have {articleCount} saved articles
              </h1>
              {articleCount > 0 && (
                <h2 className="profile-main__keywords">
                  By keywords:{" "}
                  {keywordList.slice(0, 3).map((keyword, index) => (
                    <span key={index} className="profile-main__keyword">
                      {index > 0 ? `, ${keyword}` : keyword}
                    </span>
                  ))}
                  {keywordList.length > 3 && (
                    <span className="profile-main__other-keywords">
                      , and {keywordList.length - 3} other
                    </span>
                  )}
                </h2>
              )}
            </div>
          </div>

          {articleCount > 0 ? (
            <NewsCardList
              articles={savedArticles}
              onBookmarkToggle={() => {}}
              showTrashIcon={true}
              isUserLoggedIn={true}
              hideTitle={true}
            />
          ) : (
            <p className="profile-main__empty-message">
              No saved articles yet.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
