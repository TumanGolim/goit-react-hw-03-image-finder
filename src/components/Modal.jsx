import React, { useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;

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

  return (
    <Overlay className="overlay" onClick={onClose}>
      <ModalContainer className="modal">
        <img src={image.largeImageURL} alt={image.id} />
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
