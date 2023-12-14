import React, { useEffect } from 'react';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleOverlayClick = e => {
      if (e.target.classList.contains('overlay')) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleOverlayClick);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [onClose]);

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalStyle = {
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto',
  };

  return (
    <div className="overlay" style={overlayStyle}>
      <div className="modal" style={modalStyle}>
        <img src={image.largeImageURL} alt={image.id} />
      </div>
    </div>
  );
};

export default Modal;
