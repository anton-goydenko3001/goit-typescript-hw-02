import React, { forwardRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";
import { Image } from "../../types";

interface ImageGalleryProps {
  data: Image[];
  openModal: (item: Image) => void;
}

const ImageGallery = forwardRef<HTMLUListElement, ImageGalleryProps>(
  ({ data, openModal }: ImageGalleryProps, ref) => (
    <ul ref={ref} className={style.imgList}>
      {data.map((item) => (
        <li key={item.id} className={style.imgItem}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  )
);

export default ImageGallery;
