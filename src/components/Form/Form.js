import React, { Component } from 'react';
import FormLayout from '../FormLayout/FormLayout';
import Input from '../Input/Input';
import Validation from '../Validation/Validation';
import Button from '../Button/Button';
import './Form.scss';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDelete = e => {
    const name = e.target.getAttribute('name');
    this.setState({ [name]: '' });
  };

  render() {
    const { name, email, password } = this.state;
    const { type, title, inputData } = this.props;

    return (
      <div className="form">
        <FormLayout>
          <h2 className="title">{title}</h2>
          {inputData.map((input, idx) => (
            <React.Fragment key={idx}>
              <Input
                type={input.type}
                text={input.text}
                value={this.state[input.type]}
                handleInput={this.handleInput}
                handleDelete={this.handleDelete}
                handleValid={validator[input.type]}
              />
              <Validation
                type={input.type}
                text={input.text}
                value={this.state[input.type]}
                handleValid={validator[input.type]}
              />
            </React.Fragment>
          ))}
          <Button name={name} email={email} password={password} value={title} />
          {type === 'signUp' ? (
            <p className="already-signup">
              이미 가입하셨나요? <span>로그인</span>
            </p>
          ) : (
            <>
              <p className="forget-pw">비밀번호를 잊어버리셨나요?</p>
              <p className="have-account">
                계정이 없으신가요?<span>회원가입</span>
              </p>
            </>
          )}
        </FormLayout>
      </div>
    );
  }
}

const validator = {
  name: input => input.length >= 2,
  email: input => {
    const regExp = /^[a-zA-Z\d+-.]+@[a-zA-Z\d+-.]+\.[a-zA-Z]{2,3}$/;
    return regExp.test(input);
  },
  password: input => {
    const regExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*-_])[A-Za-z\d!@#$%^&*-_]{10,}$/;
    return regExp.test(input);
  },
};

export default Form;
