import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() !== '') {
      onSubmit(query.trim());
    }
  };

  const searchbarStyle = {
    backgroundColor: '#003366',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  };

  const formStyle = {
    display: 'flex',
  };

  const inputStyle = {
    height: '20px',
    width: '200px',
    padding: '5px',
    marginRight: '5px',
  };

  const buttonStyle = {
    height: '30px',
  };

  return (
    <header style={searchbarStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <button type="submit" style={buttonStyle}>
          <span style={{ display: 'inline-block', color: 'white' }}>
            Search
          </span>
        </button>

        <input
          style={inputStyle}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Searchbar;
