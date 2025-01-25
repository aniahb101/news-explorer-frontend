import { useState, useEffect } from "react";
import NewsCardList from "../../components/NewsCardList/NewsCardList";
import "./Main.css";

function Main() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "089f7002af7c42b4b6e816bf2a582530";
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setArticles(data.articles || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <main className="main">
      <h1 className="main__title">Search results</h1>
      {isLoading ? (
        <p className="main__loading">Loading...</p>
      ) : (
        <NewsCardList articles={articles} />
      )}
    </main>
  );
}

export default Main;
