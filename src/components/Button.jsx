import React from 'react';

const Button = ({ onClick }) => {
  const buttonStyle = {
    height: '30px',
    marginTop: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
