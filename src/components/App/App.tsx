import React, { useState, useEffect, useRef } from "react";
import { fetchImages } from "../../Fetch-api/unsplash-api";
import { Image, FetchImagesResponse } from "../../types";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  const imageRef = useRef<HTMLUListElement | null>(null);

  const handleSubmit = (value: string): void => {
    setInputValue(value);
    setPage(1);
    setImages([]);
  };

  const clickHandler = (): void => {
    setPage(page + 1);
  };

  useEffect(() => {
    const onFetch = async () => {
      if (inputValue) {
        try {
          setLoading(true);
          const data: FetchImagesResponse = await fetchImages(inputValue, page);
          setTotalPages(data.total_pages);
          setError(false);
          setLoading(false);
          if (page > 1) {
            setTimeout(() => {
              scroll();
            }, 100);
          }
          setImages((prevImages) => [...prevImages, ...data.results]);
        } catch {
          setError(true);
        }
      }
    };
    onFetch();
  }, [inputValue, page]);

  const openModal = (item: Image): void => {
    setModalIsOpen(true);
    setModalImage(item);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const scroll = (): void => {
    if (imageRef.current) {
      const firstImageHeight =
        imageRef.current.childNodes[0]?.getBoundingClientRect().height || 0;
      window.scrollBy({
        top: firstImageHeight * 2,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mainContainer">
      <SearchBar onSearch={handleSubmit} />
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          modalImage={modalImage!}
        />
      )}
      {error && <ErrorMessage />}
      <ImageGallery data={images} openModal={openModal} ref={imageRef} />
      {loading && <Loader />}
      {!loading && totalPages > page && <LoadMoreBtn nextPage={clickHandler} />}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default App;
