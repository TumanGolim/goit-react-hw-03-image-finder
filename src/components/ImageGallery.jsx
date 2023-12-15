import React from 'react';
import styled from 'styled-components';
import ImageGalleryItem from './ImageGalleryItem';

const Gallery = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const ImageGallery = ({ images, onImageClick }) => (
  <Gallery>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onClick={() => onImageClick(image)}
      />
    ))}
  </Gallery>
);

export default ImageGallery;
