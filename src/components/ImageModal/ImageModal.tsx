import React from "react";
import Modal from "react-modal";
import style from "./ImageModal.module.css";
import { Image } from "../../types";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalImage: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, modalImage }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className={style.content}
    overlayClassName={style.overlay}
  >
    <img src={modalImage.urls.regular} alt={modalImage.alt_description} />
  </Modal>
);

export default ImageModal;
