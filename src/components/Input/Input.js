import React, { Component } from 'react';
import './Input.scss';

export class Input extends Component {
  render() {
    const { type, text, value } = this.props;
    const { handleInput, handleDelete } = this.props;

    return (
      <div className="input-container">
        <input
          name={type}
          type={type}
          className={type}
          placeholder={text}
          value={value}
          onChange={handleInput}
        />
        <i
          className="fas fa-times-circle"
          name={type}
          onClick={handleDelete}
        ></i>
        <i className="far fa-check-circle"></i>
      </div>
    );
  }
}

export default Input;
