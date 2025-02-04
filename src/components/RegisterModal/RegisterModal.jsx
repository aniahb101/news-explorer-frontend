// src/components/RegisterModal/RegisterModal.jsx
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onSignInClick, onRegisterSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered with:", { email, password, username });
    onClose(); // Close register modal
    onRegisterSuccess(); // Trigger success modal
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign Up"
      onSubmit={handleSubmit}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="register-modal__button-container">
        <button type="submit" className="register-modal__button">
          Sign up
        </button>

        <div className="register-modal__or-signin-group">
          <span className="register-modal__orspan">or</span>
          <button
            type="button"
            className="register-modal-signin__button"
            onClick={onSignInClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
