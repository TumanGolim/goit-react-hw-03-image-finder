import React from 'react';
import styled from 'styled-components';

const GalleryItem = styled.li`
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 360px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageGalleryItem = ({ image, onClick }) => (
  <GalleryItem onClick={onClick}>
    <img src={image.webformatURL} alt={image.id} />
  </GalleryItem>
);

export default ImageGalleryItem;
