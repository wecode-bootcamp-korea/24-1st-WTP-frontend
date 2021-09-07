import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LOGIN_API } from '../../config';
import { SIGNUP_API } from '../../config';
import './Button.scss';

export class Button extends Component {
  handleLogin = () => {
    fetch(`${LOGIN_API}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.props.email,
        password: this.props.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.auth_token) {
          localStorage.setItem('login-token', response.auth_token);
          alert('환영합니다.');
        } else {
          alert('이메일, 비밀번호를 다시 입력해주세요.');
        }
      });
  };

  handleSignup = () => {
    fetch(`${SIGNUP_API}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.props.name,
        email: this.props.email,
        password: this.props.password,
        introduction: 1,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          alert('앗차피디아에 오신 것을 환영합니다.');
        } else {
          alert('이름, 이메일, 비밀번호를 다시 입력해주세요.');
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
          <div className="btn" onClick={this.handleSignup}>
            {this.props.value}
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Button);
