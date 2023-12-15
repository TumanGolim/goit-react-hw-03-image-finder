import React from 'react';
import styled from 'styled-components';

const LoadMoreButton = styled.button`
  height: 30px;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Button = ({ onClick }) => (
  <LoadMoreButton onClick={onClick}>Load more</LoadMoreButton>
);

export default Button;
