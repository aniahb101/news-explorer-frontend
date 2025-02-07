import { useState, useEffect } from "react";
import "./NewsCard.css";

function NewsCard({
  article,
  onBookmarkToggle,
  showTrashIcon,
  isUserLoggedIn,
}) {
  const { title, description, urlToImage, source, publishedAt, keyword } =
    article;
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const savedArticles =
      JSON.parse(localStorage.getItem("bookmarkedArticles")) || [];
    setIsBookmarked(
      savedArticles.some((savedArticle) => savedArticle.title === title)
    );
  }, [title]);

  const handleClick = () => {
    if (!showTrashIcon && isUserLoggedIn) {
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
          className={`news-card__icon ${
            showTrashIcon ? "news-card__trash" : "news-card__bookmark"
          }`}
          onClick={handleClick}
          aria-label={
            showTrashIcon ? "Delete this article" : "Bookmark this article"
          }
        />
        {!isUserLoggedIn && !showTrashIcon && (
          <div className="news-card__tooltip">Sign in to save articles</div>
        )}
      </div>
      <div className="news-card__content">
        {keyword && <div className="news-card__keyword">{keyword}</div>}
        <p className="news-card__date">{formattedDate}</p>
        <h2 className="news-card__title">{title}</h2>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">
          {typeof source === "object"
            ? source.name
            : source || "Unknown Source"}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
