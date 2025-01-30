import { useState } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../../components/NewsCardList/NewsCardList";
import { fetchNewsArticles } from "../../utils/newsAPI";
import Preloader from "../Preloader/Preloader";

function Main({ onBookmarkToggle }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (keyword) => {
    setIsLoading(true);
    setError("");
    setArticles([]);

    try {
      const fetchedArticles = await fetchNewsArticles(keyword);
      if (fetchedArticles.length === 0) {
        setError("No results found.");
      } else {
        setArticles(fetchedArticles);
      }
    } catch (err) {
      setError("Failed to fetch articles. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="main">
      <SearchForm onSearch={handleSearch} />
      {isLoading && <Preloader />}
      {error && <p className="main__error">{error}</p>}
      {!isLoading && !error && articles.length > 0 && (
        <NewsCardList articles={articles} onBookmarkToggle={onBookmarkToggle} />
      )}
    </main>
  );
}

export default Main;
