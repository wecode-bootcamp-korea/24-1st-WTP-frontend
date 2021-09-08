import React, { Component } from 'react';
import './Validation.scss';

export class Validation extends Component {
  render() {
    const { type, text, value, handleValid } = this.props;
    const isValid = handleValid(value);

    return (
      <div className="validation">
        {type !== 'password' ? (
          <p
            className="alert"
            style={{ display: !value || isValid ? 'none' : 'block' }}
          >
            정확하지 않은 {text}입니다.
          </p>
        ) : (
          <p
            className="alert"
            style={{ display: !value || isValid ? 'none' : 'block' }}
          >
            {text}는 영문, 숫자, 특수문자 모두 포함하여
            <br /> 최소 10자리 이상이여야 합니다.
          </p>
        )}
      </div>
    );
  }
}

export default Validation;
