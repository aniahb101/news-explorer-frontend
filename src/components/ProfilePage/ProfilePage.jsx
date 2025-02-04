import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./ProfilePage.css";

function ProfilePage({ savedArticles, profileName }) {
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
        {savedArticles.length > 0 ? (
          <NewsCardList articles={savedArticles} />
        ) : (
          <p className="profile-main__empty-message">No saved articles yet.</p>
        )}
      </main>
    </div>
  );
}

export default ProfilePage;
