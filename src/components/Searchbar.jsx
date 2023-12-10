import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="searchbar">
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
