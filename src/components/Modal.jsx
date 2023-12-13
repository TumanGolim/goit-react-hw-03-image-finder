import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Modal = ({ image, onClose }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(true);

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        setLightboxIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const images = [image.largeImageURL];
  const currentIndex = 0;

  const handleClose = () => {
    setLightboxIsOpen(false);
    onClose();
  };

  return (
    <div>
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[currentIndex]}
          nextSrc={images[(currentIndex + 1) % images.length]}
          prevSrc={images[(currentIndex + images.length - 1) % images.length]}
          onCloseRequest={handleClose}
          onMovePrevRequest={() => setLightboxIsOpen(true)}
          onMoveNextRequest={() => setLightboxIsOpen(true)}
        />
      )}
    </div>
  );
};

export default Modal;
