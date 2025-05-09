import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./vendor/normalize.css";
import "./App.css";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SuccessModal from "./components/SuccessModal/SuccessModal";
import { getSavedArticles, saveArticle } from "./utils/api";
import { fetchNewsArticles } from "./utils/newsAPI";

function AppContent() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [savedArticles, setSavedArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getSavedArticles().then((articles) => setSavedArticles(articles));
  }, []);

  const handleBookmarkToggle = (article) => {
    saveArticle(article).then((savedArticle) => {
      setSavedArticles((prevArticles) => {
        const alreadyBookmarked = prevArticles.some(
          (a) => a.title === savedArticle.title
        );
        return alreadyBookmarked
          ? prevArticles.filter((a) => a.title !== savedArticle.title)
          : [...prevArticles, savedArticle];
      });
    });
  };

  const handleSearch = async (keyword) => {
    setIsLoading(true);
    setError("");
    setArticles([]);

    try {
      const fetchedArticles = await fetchNewsArticles(keyword);
      if (fetchedArticles.length === 0) {
        setError("no-results");
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
    <>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSubmit={({ email, password }) => {
          console.log("Logged in with:", email, password);
          setIsLoggedIn(true);
          setIsLoginOpen(false);
          navigate("/saved-articles");
        }}
        onSignUpClick={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegisterSuccess={() => setIsSuccessOpen(true)}
        onSignInClick={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        onSignInClick={() => {
          setIsSuccessOpen(false);
          setIsLoginOpen(true);
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                onSignInClick={() => setIsLoginOpen(true)}
                onSearch={handleSearch}
              />
              <main>
                <Main
                  onBookmarkToggle={handleBookmarkToggle}
                  articles={articles}
                  isLoading={isLoading}
                  error={error}
                />
                <AboutSection />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-articles"
          element={
            isLoggedIn ? (
              <>
                <ProfilePage
                  savedArticles={savedArticles}
                  profileName="Aniah Brown"
                  onBookmarkToggle={handleBookmarkToggle}
                />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
