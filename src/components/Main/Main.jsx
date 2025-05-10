import "./Main.css";
import NewsCardList from "../../components/NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

function Main({ articles, isLoading, error, onBookmarkToggle }) {
  return (
    <div className="main">
      {isLoading && <Preloader />}

      {error === "no-results" ? (
        <NotFound />
      ) : (
        error && <p className="main__error">{error}</p>
      )}

      {!isLoading && !error && articles.length > 0 && (
        <NewsCardList articles={articles} onBookmarkToggle={onBookmarkToggle} />
      )}
    </div>
  );
}

export default Main;
