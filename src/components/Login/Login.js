import React, { Component } from 'react';
import Email from './Email';
import Password from './Password';
import { withRouter } from 'react-router-dom';
import { GET_PRODUCT_API } from '../../config';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pw: '',
    };
  }

  handleLogin = () => {
    fetch(`${GET_PRODUCT_API}/login`, {
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

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDelete = e => {
    const name = e.target.name;
    this.setState({ [name]: '' });
  };

  render() {
    const { email, pw } = this.state;
    const { handleInput, handleDelete, handleLogin } = this;

    return (
      <div className="login">
        <div className="login-container">
          <div className="login-logo">
            <img src="images/AtchaPedia_Logo_Big.png" alt="logo" />
          </div>
          <div className="login-title">
            <span>로그인</span>
          </div>
          <div className="login-form">
            <Email
              email={email}
              handleInput={handleInput}
              handleDelete={handleDelete}
            />
            <Password
              pw={pw}
              handleInput={handleInput}
              handleDelete={handleDelete}
            />
            <button className="btn-login" onClick={handleLogin}>
              로그인
            </button>
          </div>
          <p className="forget-pw">비밀번호를 잊어버리셨나요?</p>
          <p className="have-account">
            계정이 없으신가요?<span>회원가입</span>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
