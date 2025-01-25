import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({ isOpen, onClose, title, children, onSubmit }) {
  console.log("ModalWithForm isOpen:", isOpen);
  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button className="modal__close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
