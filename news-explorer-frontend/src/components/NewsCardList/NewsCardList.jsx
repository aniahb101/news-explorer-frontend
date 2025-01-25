import { useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more cards
  };

  return (
    <div className="news-card-list-container">
      <div className="news-card-list">
        {articles.slice(0, visibleCount).map((article, index) => (
          <NewsCard key={index} article={article} />
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
