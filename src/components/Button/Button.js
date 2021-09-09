import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { USERS_LIST } from '../../config';
import './Button.scss';

export class Button extends Component {
  handleLogin = () => {
    fetch(`${USERS_LIST}/login`, {
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
          localStorage.setItem('username', response.user_name);
          alert(`${response.user_name}님 환영합니다.`);
        } else if (response.message === '존재하지 않는 아이디입니다!') {
          alert('존재하지 않는 아이디입니다.');
        } else {
          alert('비밀번호가 일치하지 않습니다.');
        }
      });
  };

  handleSignup = () => {
    fetch(`${USERS_LIST}/signup`, {
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
        if (response.MESSAGE === 'User Registered!') {
          alert('앗차피디아에 오신 것을 환영합니다.');
        } else if (response.MESSAGE === 'Existed E-Mail') {
          alert('중복된 이메일입니다.');
        } else if (response.MESSAGE === 'Wrong Name Form') {
          alert('잘못된 이름 형식입니다.');
        } else if (response.MESSAGE === 'Wrong Password Form') {
          alert('잘못된 비밀번호 형식입니다.');
        } else {
          alert('잘못된 이메일 형식입니다.');
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
