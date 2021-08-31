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

  // handleDelete = e => {
  //   const { name } = e.target;
  //   console.log(name);
  //   this.setState({
  //     [name]: name,
  //   });
  // };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, pw } = this.state;
    const { handleInput } = this;

    const isPw = !pw || pw.length >= 6;
    const isEmail = !email;
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
          <form className="login-form">
            <div className="email-container">
              <input
                id="email"
                name="email"
                className="email"
                placeholder="이메일"
                type="text"
                onChange={handleInput}
              />
              <i
                className={`fas fa-times-circle ${
                  isEmail || checkEmail(email) ? 'none' : ''
                }`}
              ></i>
              <i
                className={`fas fa-exclamation-circle ${
                  isEmail || checkEmail(email) ? 'none' : ''
                }`}
              ></i>
            </div>
            <div className="email-validation">
              <p
                className={`email-caution ${
                  isEmail || checkEmail(email) ? 'none' : ''
                }`}
              >
                정확하지 않은 이메일입니다.
              </p>
            </div>
            <div className="pw-container">
              <input
                id="pw"
                name="pw"
                className="password"
                placeholder="비밀번호"
                type="text"
                onChange={handleInput}
              />
              <i className={`fas fa-times-circle ${isPw ? 'none' : ''}`}></i>
              <i className={`far fa-check-circle ${isPw ? 'none' : ''}`}></i>
            </div>
            <div className="pw-validation">
              <p className={`pw-caution ${isPw ? 'none' : ''}`}>
                비밀번호는 최소 6자리 이상이어야 합니다.
              </p>
            </div>
            <button className="btn-login">로그인</button>
          </form>
          <p className="forget-pw">비밀번호를 잊어버리셨나요?</p>
          <p className="have-account">
            계정이 없으신가요?<span>회원가입</span>
          </p>
        </div>
      </div>
    );
  }
}
