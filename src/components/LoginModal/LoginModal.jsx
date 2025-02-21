import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSubmit, onSignUpClick }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign In"
      onSubmit={onSubmit}
    >
      <div className="login-modal__container">
        <form className="login-modal__form" onSubmit={onSubmit}>
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
            />
          </div>

          <div className="login-modal__button-container">
            <button type="submit" className="login-modal__button">
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
        </form>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
