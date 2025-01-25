import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onSubmit, onSignInClick }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign Up"
      onSubmit={onSubmit}
    >
      <div className="register-modal__field">
        <label htmlFor="email" className="register-modal__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="register-modal__input"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="register-modal__field">
        <label htmlFor="password" className="register-modal__label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="register-modal__input"
          placeholder="Enter password"
          required
        />
      </div>
      <div className="register-modal__field">
        <label htmlFor="username" className="register-modal__label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="register-modal__input"
          placeholder="Enter username"
          required
        />
      </div>

      <div className="register-modal__button-container">
        {}
        <button type="submit" className="register-modal__button">
          Sign up
        </button>

        {}
        <span className="register-modal__orspan">or</span>
        <button
          type="button"
          className="register-modal-signin__button"
          onClick={onSignInClick}
        >
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
