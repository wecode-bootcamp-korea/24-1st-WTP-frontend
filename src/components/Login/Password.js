import React, { Component } from 'react';

export class Password extends Component {
  render() {
    const checkPw = pw => {
      const regExp =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*-_])[A-Za-z\d!@#$%^&*-_]{10,}$/;
      return regExp.test(pw);
    };

    const { pw, handleInput, handleDelete } = this.props;

    return (
      <>
        <div className={`pw-container ${!pw || checkPw(pw) ? '' : 'invalid'}`}>
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
            name="pw"
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
      </>
    );
  }
}

export default Password;
