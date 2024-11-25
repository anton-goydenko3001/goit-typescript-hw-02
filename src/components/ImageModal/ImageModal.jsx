import Modal from "react-modal";
import style from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, modalImage }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={style.content}
      overlayClassName={style.overlay}
    >
      <img src={modalImage.urls.regular} alt={modalImage.alt_description} />
    </Modal>
  );
}
