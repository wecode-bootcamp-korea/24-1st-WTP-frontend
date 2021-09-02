import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Signup.scss';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      pw: '',
    };
  }

  handleSignup = () => {
    fetch('http://10.58.3.64:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.pw,
        introduction: 1,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          alert('회원가입 성공!');
        }
      });
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
    const { email, pw, name } = this.state;
    const { handleInput, handleDelete, handleSignup } = this;

    const checkName = !name || name.length >= 2;

    const checkEmail = email => {
      const regExp = /^[a-zA-Z\d+-.]+@[a-zA-Z\d+-.]+\.[a-zA-Z]{2,3}$/;
      return regExp.test(email);
    };

    const checkPw = pw => {
      const regExp =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*-_])[A-Za-z\d!@#$%^&*-_]{10,}$/;
      return regExp.test(pw);
    };

    return (
      <div className="signup">
        <div className="signup-container">
          <div className="signup-logo">
            <img src="/images/AtchaPedia_Logo_Big.png" alt="logo" />
          </div>
          <div className="signup-title">
            <span>회원가입</span>
          </div>
          <div className="signup-form">
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
              <i
                className={`fas fa-times-circle ${!name ? 'none' : ''}`}
                onClick={handleDelete}
              ></i>
              <i
                className={`far fa-check-circle ${!name ? 'none' : ''}`}
                style={{
                  color: checkName ? '#4ad3b1' : '#a0a0a0',
                }}
              ></i>
            </div>
            <div className="name-validation">
              <p className={`name-caution ${checkName ? 'none' : ''}`}>
                정확하지 않은 이름입니다.
              </p>
            </div>
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
                value={email}
                type="text"
                onChange={handleInput}
              />
              <i
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
                className={`far fa-check-circle ${!pw ? 'none' : ''}`}
                style={{
                  color: checkPw(pw) ? '#4ad3b1' : '#a0a0a0',
                }}
              ></i>
            </div>
            <div className="pw-validation">
              <p className={`pw-caution ${!pw || checkPw(pw) ? 'none' : ''}`}>
                비밀번호는 영문, 숫자, 특수문자 모두 포함하여
                <br /> 최소 10자리 이상이여야 합니다.
              </p>
            </div>
            <button className="btn-signup" onClick={handleSignup}>
              회원가입
            </button>
          </div>
          <p className="have-account">
            이미 가입하셨나요?<span>로그인</span>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
