import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { onClick } = this.props;

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
  }
}

export default Button;
