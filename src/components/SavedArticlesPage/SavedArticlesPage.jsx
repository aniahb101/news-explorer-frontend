import React, { useEffect, useState } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedArticlesPage.css";

function SavedArticlesPage() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const storedArticles =
      JSON.parse(localStorage.getItem("bookmarkedArticles")) || [];
    setSavedArticles(storedArticles);
  }, []);

  return (
    <div className="saved-articles-page">
      <h1 className="saved-articles-page__title">Saved Articles</h1>
      {savedArticles.length > 0 ? (
        <NewsCardList articles={savedArticles} showTrashIcon={true} />
      ) : (
        <p className="saved-articles-page__empty-message">
          No saved articles yet.
        </p>
      )}
    </div>
  );
}

export default SavedArticlesPage;
