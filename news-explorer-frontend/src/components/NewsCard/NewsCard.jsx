import { useState, useEffect } from "react";
import "./NewsCard.css";

function NewsCard({ article, onBookmarkToggle, isUserLoggedIn }) {
  const { title, description, urlToImage, source, publishedAt } = article;
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const savedArticles =
      JSON.parse(localStorage.getItem("bookmarkedArticles")) || [];
    setIsBookmarked(
      savedArticles.some((savedArticle) => savedArticle.title === title)
    );
  }, [title]);

  const toggleBookmark = () => {
    if (isUserLoggedIn) {
      setIsBookmarked((prev) => !prev);
      onBookmarkToggle(article);
    }
  };

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <img
          src={urlToImage || "/images/placeholder.png"}
          alt={title}
          className="news-card__image"
        />
        <button
          className={`news-card__bookmark ${
            isBookmarked ? "news-card__bookmark--active" : ""
          } ${!isUserLoggedIn ? "news-card__bookmark--inactive" : ""}`}
          onClick={toggleBookmark}
          aria-label="Bookmark this article"
        />
        {!isUserLoggedIn && (
          <div className="news-card__tooltip">Sign in to save articles</div>
        )}
      </div>
      <div className="news-card__content">
        <p className="news-card__date">{formattedDate}</p>
        <h2 className="news-card__title">{title}</h2>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source?.name}</p>
      </div>
    </div>
  );
}

export default NewsCard;
