import React, { Component } from 'react';

export class Input extends Component {
  render() {
    const { type, text, value } = this.props;
    const { handleInput, handleDelete } = this;

    return (
      <div className="container">
        <input
          id={type}
          name={type}
          className={type}
          placeholder={text}
          value={value}
          type={type}
          onChange={handleInput}
        />
        <i
          name={type}
          className="fas fa-times-circle"
          onClick={handleDelete}
        ></i>
        <i className="far fa-check-circle"></i>
      </div>
    );
  }
}

export default Input;
