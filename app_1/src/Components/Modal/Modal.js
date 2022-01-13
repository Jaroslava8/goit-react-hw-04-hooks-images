import styles from "../Modal/Modal.module.css";
import { createPortal } from "react-dom";
import React, { useEffect } from "react";
import propTypes from "prop-types";

export default function Modal({ largeImgURL, closeModal }) {
  useEffect(() => {
    window.addEventListener("keydown", pressClose);
    return () => window.removeEventListener("keydown", pressClose);
  }, []);

  const onClickOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) closeModal(null);
  };

  const pressClose = (event) => {
    if (event.code === "Escape") closeModal(null);
  };

  return createPortal(
    <div className={styles.overlay} onClick={onClickOverlay}>
      <div className={styles.modal}>
        <img src={largeImgURL} alt="modalImage" className={styles.modalImage} />
      </div>
    </div>,
    document.querySelector("#modalImage")
  );
}

Modal.propTypes = {
  largeImgURL: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};
