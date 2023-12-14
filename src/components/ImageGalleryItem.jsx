import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { image, onClick } = this.props;

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
  }
}

export default ImageGalleryItem;
