import React, { Component } from 'react';

export class Email extends Component {
  render() {
    const { email, handleInput, handleDelete } = this.props;

    const checkEmail = email => {
      const regExp = /^[a-zA-Z\d+-.]+@[a-zA-Z\d+-.]+\.[a-zA-Z]{2,3}$/;
      return regExp.test(email);
    };

    return (
      <>
        <div
          className={`email-container ${
            !email || checkEmail(email) ? '' : 'invalid'
          }`}
        >
          <input
            id="email"
            name="email"
            className="email"
            placeholder="이메일"
            type="text"
            value={email}
            onChange={handleInput}
          />
          <i
            name="email"
            className={`fas fa-times-circle ${!email ? 'none' : ''}`}
            onClick={handleDelete}
          ></i>
          <i
            className={`far fa-check-circle ${!email ? 'none' : ''}`}
            style={{
              color: checkEmail(email) ? '#4ad3b1' : '#a0a0a0',
            }}
          ></i>
        </div>
        <div className="email-validation">
          <p
            className={`email-caution ${
              !email || checkEmail(email) ? 'none' : ''
            }`}
          >
            정확하지 않은 이메일입니다.
          </p>
        </div>
      </>
    );
  }
}

export default Email;
