import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  const galleryItemStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '600px',
    height: '360px',
  };

  return (
    <li style={galleryItemStyle} onClick={onClick}>
      <img src={image.webformatURL} alt={image.id} />
    </li>
  );
};

export default ImageGalleryItem;
