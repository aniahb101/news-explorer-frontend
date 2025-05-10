import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSubmit, onSignUpClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onSubmit({ email, password });
    }
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign In"
      onSubmit={handleSubmit}
    >
      <>
        <div className="login-modal__container">
          <div className="login-modal__field">
            <label className="login-modal__label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="login-modal__input"
              placeholder="Enter email"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="login-modal__field">
            <label className="login-modal__label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="login-modal__input"
              placeholder="Enter password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <div className="login-modal__button-container">
          <button
            type="submit"
            className="login-modal__button"
            disabled={!email || !password}
          >
            Sign in
          </button>
        </div>

        <div className="login-modal__or-signup-group">
          <span className="login-modal__orspan">or</span>
          <button
            type="button"
            className="login-modal-signup__button"
            onClick={onSignUpClick}
          >
            Sign up
          </button>
        </div>
      </>
    </ModalWithForm>
  );
}

export default LoginModal;
