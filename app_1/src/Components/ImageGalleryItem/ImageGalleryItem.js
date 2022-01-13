import styles from "../ImageGalleryItem/ImageGalleryItem.module.css";
import propTypes from "prop-types";

export default function ImageGalleryItem({
  url,
  tags,
  onClickToModal,
  largeImageURL,
}) {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryItemImage}
        src={url}
        alt={tags}
        onClick={() => onClickToModal(largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  url: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
};
