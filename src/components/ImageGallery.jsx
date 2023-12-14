import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;

    const galleryStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gridGap: '10px',
      listStyle: 'none',
      padding: '0',
      marginTop: '20px',
    };

    return (
      <ul style={galleryStyle}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={() => onImageClick(image)}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
