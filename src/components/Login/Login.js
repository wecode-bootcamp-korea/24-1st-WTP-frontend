import React, { Component } from 'react';
import './Login.scss';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pw: '',
    };
  }

  handleLogin = () => {
    fetch('http://10.58.6.20:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDelete = e => {
    const name = e.target.parentNode.childNodes[0].name;
    this.setState({ [name]: '' });
  };

  render() {
    const { email, pw } = this.state;
    const { handleInput, handleDelete, handleLogin } = this;

    const checkPw = pw => {
      const regExp =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*-_])[A-Za-z\d!@#$%^&*-_]{10,}$/;
      return regExp.test(pw);
    };

    const checkEmail = email => {
      const regExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(email);
    };

    return (
      <div className="login">
        <div className="login-container">
          <div className="login-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png"
              alt="logo"
            />
          </div>
          <div className="login-title">
            <span>로그인</span>
          </div>
          <div className="login-form">
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
                className={`fas fa-times-circle ${!email ? 'none' : ''}`}
                onClick={handleDelete}
              ></i>
              <i
                className={`far fa-check-circle ${
                  !email || checkEmail(email) ? 'none' : ''
                }`}
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
            <div
              className={`pw-container ${!pw || checkPw(pw) ? '' : 'invalid'}`}
            >
              <input
                id="pw"
                name="pw"
                className="password"
                placeholder="비밀번호"
                type="password"
                value={pw}
                onChange={handleInput}
              />
              <i
                className={`fas fa-times-circle ${!pw ? 'none' : ''}`}
                onClick={handleDelete}
              ></i>
              <i
                className={`far fa-check-circle ${
                  !pw || checkPw(pw) ? 'none' : ''
                }`}
              ></i>
            </div>
            <div className="pw-validation">
              <p className={`pw-caution ${!pw || checkPw(pw) ? 'none' : ''}`}>
                비밀번호는 영문, 숫자, 특수문자 모두 포함하여
                <br /> 최소 10자리 이상이여야 합니다.
              </p>
            </div>
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
