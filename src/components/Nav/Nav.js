import React, { Component } from 'react';
import './Nav.scss';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      name: '',
    };
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { modalOpen } = this.state;
    const { openModal, closeModal } = this;

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <img src="/images/AtchaPedia_Logo_Small.png" alt="logo" />
            <div className="sorts-contents">
              <span>영화</span>
              <span>TV 프로그램</span>
              <span>책</span>
            </div>
          </div>
          <div className="navbar-right">
            <div className="search-bar">
              <div className="search-container">
                <i class="fas fa-search"></i>
                <input
                  className="search-input"
                  placeholder="작품 제목, 배우, 감독을 검색해보세요."
                  type="text"
                />
              </div>
            </div>
            <div className="btn-container" onClick={openModal}>
              <button className="btn-login">로그인</button>
              <Modal open={modalOpen} close={closeModal}>
                <Form type="login" title="로그인" inputData={loginData} />
              </Modal>
              <button className="btn-signup">회원가입</button>
              <Modal open={modalOpen} close={closeModal}>
                <Form type="signUp" title="회원가입" inputData={signUpData} />
              </Modal>
            </div>
          </div>
        </div>
      </nav>
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

const loginData = [
  {
    type: 'email',
    text: '이메일',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
];
