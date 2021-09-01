import React, { Component } from 'react';
import './Signup.scss';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    const { email, pw, name } = this.state;
    const { handleInput } = this;

    console.log(name.length);

    const isName = !name || name.length >= 2;

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
      <div className="signup">
        <div className="signup-container">
          <div className="signup-logo">
            <img src="/images/AtchaPediaLogo.png" alt="logo" />
          </div>
          <div className="signup-title">
            <span>회원가입</span>
          </div>
          <form className="signup-form">
            <div
              className={`name-container ${name.length === 1 ? 'invalid' : ''}`}
            >
              <input
                id="name"
                name="name"
                className="name"
                placeholder="이름"
                value={name}
                type="text"
                onChange={handleInput}
              />
              <i className={`fas fa-times-circle ${isName ? 'none' : ''}`}></i>
              <i className={`far fa-check-circle ${isName ? 'none' : ''}`}></i>
            </div>
            <div className="name-validation">
              <p className={`name-caution ${isName ? 'none' : ''}`}>
                정확하지 않은 이름입니다.
              </p>
            </div>
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
                  !email || checkEmail(email) ? 'none' : ''
                }`}
              ></i>
              <i
                className={`fas fa-exclamation-circle ${
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
            <div className="pw-container">
              <input
                id="pw"
                name="pw"
                className="password"
                placeholder="비밀번호"
                type="password"
                onChange={handleInput}
              />
              <i
                className={`fas fa-times-circle ${
                  !pw || checkPw(pw) ? 'none' : ''
                }`}
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
            <button className="btn-signup">회원가입</button>
          </form>
          <p className="have-account">
            이미 가입하셨나요?<span>로그인</span>
          </p>
        </div>
      </div>
    );
  }
}
