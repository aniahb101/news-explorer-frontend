import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./vendor/normalize.css";
import "./App.css";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { getSavedArticles, saveArticle } from "./utils/api";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

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

  return (
    <Router>
      <div className="app">
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSubmit={() => setIsLoginOpen(false)}
          onSignUpClick={() => {
            setIsLoginOpen(false);
            setIsRegisterOpen(true);
          }}
        />
        <RegisterModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          onSubmit={() => setIsRegisterOpen(false)}
          onSignInClick={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header onSignInClick={() => setIsLoginOpen(true)} />
                <main>
                  <Main onBookmarkToggle={handleBookmarkToggle} />
                  <AboutSection />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-articles"
            element={
              <>
                <ProfilePage
                  savedArticles={savedArticles}
                  profileName="Aniah Brown"
                  onBookmarkToggle={handleBookmarkToggle}
                />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
