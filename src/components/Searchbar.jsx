import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    if (query.trim() !== '') {
      this.props.onSubmit(query.trim());
    }
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query } = this.state;

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
        <form style={formStyle} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
