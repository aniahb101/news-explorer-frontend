import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setError("");
      onSearch(keyword);
    } else {
      setError("Please enter a keyword.");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter topic"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit" className="search-form__button" aria-label="Search">
        Search
      </button>
      {error && <p className="search-form__error">{error}</p>}
    </form>
  );
}

export default SearchForm;
