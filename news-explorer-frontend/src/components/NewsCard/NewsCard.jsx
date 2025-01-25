import { useState } from "react";
import "./NewsCard.css";

function NewsCard({ article }) {
  const { title, description, urlToImage, source, publishedAt } = article;
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prevState) => !prevState);
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
          }`}
          onClick={toggleBookmark}
          aria-label="Bookmark this article"
        />
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
