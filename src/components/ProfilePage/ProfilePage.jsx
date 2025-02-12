import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./ProfilePage.css";

function ProfilePage({ savedArticles, profileName }) {
  const articleCount = savedArticles.length;
  const keywordList = ["Lace", "Embroidery", "Apple", "Lolita"];

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-header__container">
          <h1 className="profile-header__logo">NewsExplorer</h1>
          <nav className="profile-header__nav">
            <a href="/" className="profile-header__link">
              Home
            </a>
            <span className="profile-header__name">{profileName}</span>
          </nav>
        </div>
      </header>

      <main className="profile-main">
        <h2 className="profile-main__title">Saved Articles</h2>

        <div className="profile-main__summary">
          <h1 className="profile-main__saved-count">
            {profileName}, you have {articleCount} saved articles
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

        {articleCount > 0 ? (
          <NewsCardList
            articles={savedArticles}
            onBookmarkToggle={() => {}}
            showTrashIcon={true}
            isUserLoggedIn={true}
          />
        ) : (
          <p className="profile-main__empty-message">No saved articles yet.</p>
        )}
      </main>
    </div>
  );
}

export default ProfilePage;
