import style from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ nextPage }) {
  return (
    <button className={style.loadMoreBtn} onClick={nextPage}>
      Load more
    </button>
  );
}
