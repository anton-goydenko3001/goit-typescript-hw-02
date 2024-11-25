import React from "react";
import style from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  nextPage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ nextPage }) => (
  <button className={style.loadMoreBtn} onClick={nextPage}>
    Load more
  </button>
);

export default LoadMoreBtn;
