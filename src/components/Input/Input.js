import React, { Component } from 'react';
import './Input.scss';

export class Input extends Component {
  render() {
    const { type, text, value, handleInput, handleDelete, handleValid } =
      this.props;
    const isValid = handleValid(value);

    return (
      <div
        className="input-container"
        style={{
          backgroundColor: !value || isValid ? '#f8f8f8' : '#fef0f0',
          border: !value || isValid ? '' : '1px solid #f50700',
        }}
      >
        <input
          name={type}
          type={type}
          className={type}
          placeholder={text}
          value={value}
          onChange={handleInput}
        />
        {value && (
          <>
            <i
              className="fas fa-times-circle"
              name={type}
              onClick={handleDelete}
            ></i>
            <i
              className="far fa-check-circle"
              style={{
                color: isValid ? '#4ad3b1' : '#a0a0a0',
              }}
            ></i>
          </>
        )}
      </div>
    );
  }
}

export default Input;
