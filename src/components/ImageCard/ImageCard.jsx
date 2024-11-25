import style from "./ImageCard.module.css";

export default function ImageCard({ item, openModal }) {
  return (
    <div className={style.imageContainer}>
      <img
        className={style.imageItem}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => openModal(item)}
      />
    </div>
  );
}
