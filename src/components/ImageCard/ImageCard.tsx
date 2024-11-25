import React from "react";
import style from "./ImageCard.module.css";
import { Image } from "../../types";

interface ImageCardProps {
  item: Image;
  openModal: (item: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => (
  <div className={style.imageContainer}>
    <img
      className={style.imageItem}
      src={item.urls.small}
      alt={item.alt_description}
      onClick={() => openModal(item)}
    />
  </div>
);

export default ImageCard;
