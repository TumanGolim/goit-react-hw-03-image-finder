import React from 'react';

const Modal = ({ image, onClose }) => (
  <div className="overlay" onClick={onClose}>
    <div className="modal">
      <img src={image.largeImageURL} alt={image.id} />
    </div>
  </div>
);

export default Modal;
