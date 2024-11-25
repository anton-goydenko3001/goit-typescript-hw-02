import SearchBar from "../SearchBar/SearchBar";
import { fetchImages } from "../../Fetch-api/unsplash-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import { useState, useEffect, useRef } from "react";
import "./App.css";
//==================================================
export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  //================================================
  const imageRef = useRef();

  function handleSubmit(value) {
    setInputValue(value);
    setPage(1);
    setImages([]);
  }

  function clickHandler() {
    setPage(page + 1);
  }

  useEffect(() => {
    async function onFetch() {
      if (inputValue) {
        try {
          setLoading(true);
          const data = await fetchImages(inputValue, page);
          setTotalPages(data.total_pages);
          setError(false);
          setLoading(false);
          page > 1 &&
            setTimeout(() => {
              scroll();
            }, 100);
          setImages((prevImages) => [...prevImages, ...data.results]);
        } catch (error) {
          // setLoading(false);
          setError(true);
        }
      }
    }
    onFetch();
  }, [inputValue, page]);

  const openModal = (item) => {
    setModalIsOpen(true);
    setModalImage(item);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  function scroll() {
    imageRef.current?.childNodes?.[0] &&
      window.scrollBy({
        top: imageRef.current.childNodes[0].getBoundingClientRect().height * 2,
        left: 0,
        behavior: "smooth",
      });
  }

  return (
    <div className="mainContainer">
      <SearchBar onSearch={handleSubmit} />
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          modalImage={modalImage}
        ></ImageModal>
      )}
      {error && <ErrorMessage error={error} />}
      <ImageGallery
        data={images}
        openModal={openModal}
        ref={imageRef}
      ></ImageGallery>
      {loading && <Loader></Loader>}
      {totalPages > page && <LoadMoreBtn nextPage={clickHandler}></LoadMoreBtn>}
      <Toaster position="bottom-right" />
    </div>
  );
}
