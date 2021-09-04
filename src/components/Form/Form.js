import React, { Component } from 'react';
import FormLayout from '../FormLayout/FormLayout';
import Input from '../Input/Input';
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
    const name = e.target.name;
    this.setState({ [name]: '' });
  };

  render() {
    const { type, title, inputData } = this.props;

    return (
      <div className="form">
        <FormLayout>
          <h2 className="title">{title}</h2>
          {inputData.map((input, idx) => (
            <Input
              key={idx}
              type={input.type}
              text={input.text}
              value={this.state[input.type]}
              handleInput={this.handleInput}
              handleDelete={this.handleDelete}
            />
          ))}
          <Button value={title} />
          {type === 'signUp' && (
            <p className="isAlreadyLogin">
              이미 가입하셨나요? <span>로그인</span>
            </p>
          )}
        </FormLayout>
      </div>
    );
  }
}

export default Form;
