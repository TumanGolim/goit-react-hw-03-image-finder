import React from 'react';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="gallery">
    {images.map(image => (
      <li
        key={image.uniqueKey}
        className="gallery-item"
        onClick={() => onImageClick(image.largeImageURL)}
      >
        <img
          src={image.webformatURL}
          alt={image.tags}
          className="gallery-item-image"
        />
      </li>
    ))}
  </ul>
);

export default ImageGallery;