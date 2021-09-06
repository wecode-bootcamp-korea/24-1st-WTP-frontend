import React, { Component } from 'react';
import { LOGIN_API } from '../../config';
// import { SIGNUP_API } from '../../config';
import './Button.scss';

export class Button extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pw: '',
    };
  }

  handleLogin = () => {
    fetch(`${LOGIN_API}`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.props.history.push('/');
        } else {
          alert('아이디, 비밀번호를 다시 입력해주세요!');
        }
      });
  };

  render() {
    const { value } = this.props;
    return (
      <>
        {value === '로그인' ? (
          <div className="btn" onClick={this.handleLogin}>
            {this.props.value}
          </div>
        ) : (
          <div className="btn">{this.props.value}</div>
        )}
      </>
    );
  }
}

export default Button;
