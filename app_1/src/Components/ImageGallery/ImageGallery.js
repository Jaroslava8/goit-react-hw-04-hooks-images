import React, { useState, useEffect } from "react";
import styles from "../ImageGallery/ImageGallery.module.css";
import ApiAddress from "../ApiAddress";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import propTypes from "prop-types";


export default function ImageGallery({
  search,
  onClickToModal,
  page,
  setPage,
}) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!search) return;

    if (page === 1) {
      setImages([]);
      setStatus("idle");
      setError(null);
    }

    setStatus("pending");
    ApiAddress(search, page)
      .then((resp) => {
        setImages((images) => [...images, ...resp.hits]);
        setStatus("resolved");
      
      })
      .catch((error) => {
        setError(error.message);
        setStatus("rejected");
        setImages([]);
      });
  }, [search, page]);

  const onClickButton = () => {
    setPage(1);
  };

  if (status === "rejected") {
    return <h2>{error}</h2>;
  }

  return (
    <>
      {images.length !== 0 && (
        <ul className={styles.imageGallery}>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                url={webformatURL}
                tags={tags}
                onClickToModal={onClickToModal}
                largeImageURL={largeImageURL}
              />
            );
          })}
        </ul>
      )}
  
      {status === "resolved" && <Button onClickButton={onClickButton} />}
    </>
  );
}

ImageGallery.propTypes = {
  search: propTypes.string.isRequired,
  onClickToModal: propTypes.func.isRequired,
};
