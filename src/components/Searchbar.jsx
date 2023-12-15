import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #003366;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  height: 20px;
  width: 200px;
  padding: 5px;
  margin-right: 5px;
`;

const Button = styled.button`
  height: 30px;
`;

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSubmit(query.trim());
    }
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <span>Search</span>
        </Button>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
};

export default Searchbar;
