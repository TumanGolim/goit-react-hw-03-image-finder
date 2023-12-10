import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => (
  <button type="button" className="load-more-button" onClick={onLoadMore}>
    <span className="button-label">Load more</span>
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
