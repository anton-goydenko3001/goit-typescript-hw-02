import { forwardRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = forwardRef(function ImageGalleryComponent(
  { data, openModal },
  ref
) {
  return (
    <ul ref={ref} className={style.imgList}>
      {data.map((item) => (
        <li key={item.id} className={style.imgItem}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
});

export default ImageGallery;
