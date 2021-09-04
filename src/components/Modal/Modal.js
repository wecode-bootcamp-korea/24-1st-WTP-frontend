import React, { Component } from 'react';
import Form from '../Form/Form';
import './Modal.scss';

export class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <Form type="signUp" title="회원가입" inputData={signUpData} />
      </div>
    );
  }
}

const signUpData = [
  {
    type: 'name',
    text: '이름',
  },
  {
    type: 'email',
    text: '이메일',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
];

export default Modal;
