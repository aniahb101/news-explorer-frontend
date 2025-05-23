import { useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  articles,
  onBookmarkToggle,
  showTrashIcon,
  isUserLoggedIn = false,
  hideTitle = false,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => setVisibleCount((prevCount) => prevCount + 3);

  return (
    <div className="news-card-list-container">
      {!hideTitle && <h2 className="news-card-list__header">Search Results</h2>}

      <div className="news-card-list">
        {articles.slice(0, visibleCount).map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            onBookmarkToggle={onBookmarkToggle}
            showTrashIcon={showTrashIcon}
            isUserLoggedIn={isUserLoggedIn}
          />
        ))}
      </div>

      {visibleCount < articles.length && (
        <button className="news-card-list__button" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
