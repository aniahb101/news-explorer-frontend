import React, { useState } from "react";
import "./vendor/normalize.css";
import "./App.css";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Logged In");
    setIsLoginOpen(false);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Registered");
    setIsRegisterOpen(false);
  };

  const switchToRegisterModal = () => {
    console.log("Switching to Register Modal");
    console.log(
      "Before: isLoginOpen:",
      isLoginOpen,
      "isRegisterOpen:",
      isRegisterOpen
    );
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
    console.log(
      "After: isLoginOpen:",
      isLoginOpen,
      "isRegisterOpen:",
      isRegisterOpen
    );
  };

  const switchToLoginModal = () => {
    console.log("Switching to Login Modal");
    console.log(
      "Before: isLoginOpen:",
      isLoginOpen,
      "isRegisterOpen:",
      isRegisterOpen
    );
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
    console.log(
      "After: isLoginOpen:",
      isLoginOpen,
      "isRegisterOpen:",
      isRegisterOpen
    );
  };

  return (
    <div>
      <Header
        onSignInClick={() => {
          console.log("Sign In button clicked");
          setIsLoginOpen(true);
        }}
      />
      <main>
        <Main />
        <AboutSection />
      </main>
      <Footer />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => {
          console.log("Closing Login Modal");
          setIsLoginOpen(false);
        }}
        onSubmit={handleLoginSubmit}
        onSignUpClick={switchToRegisterModal}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => {
          console.log("Closing Register Modal");
          setIsRegisterOpen(false);
        }}
        onSubmit={handleRegisterSubmit}
        onSignInClick={switchToLoginModal}
      />
    </div>
  );
}

export default App;
