import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SuccessModal.css";

function SuccessModal({ isOpen, onClose, onSignInClick }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose}>
      <div className="success-modal__container">
        <h2 className="success-modal__title">
          Registration successfully
          <br />
          completed!
        </h2>
        <div className="success-modal__content">
          <button
            type="button"
            className="success-modal__signin-button"
            onClick={onSignInClick}
          >
            Sign In
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default SuccessModal;
