import React, { Component } from 'react';
import './Nav.scss';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
// import { LOGIN_API } from '../../config';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: '',
    };
  }

  openModal = separator => {
    this.setState({
      modalOpen: separator,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: '',
    });
  };

  render() {
    const { modalOpen } = this.state;
    const { openModal, closeModal } = this;

    const handleLogout = () => {
      localStorage.removeItem('login-token');
    };

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
            <div className="btn-container">
              {localStorage.length === 0 ||
              localStorage.getItem('login-btn') ? (
                <>
                  <button
                    className="btn-login"
                    onClick={() => openModal('login')}
                  >
                    로그인
                  </button>
                  <button
                    className="btn-signup"
                    onClick={() => openModal('signUp')}
                  >
                    회원가입
                  </button>
                </>
              ) : (
                <>
                  <button className="btn-logout" onClick={handleLogout}>
                    로그아웃
                  </button>
                  <i className="far fa-user-circle"></i>
                </>
              )}
              {modalOpen && (
                <Modal open={modalOpen} close={closeModal}>
                  <Form
                    type={modalOpen}
                    title={modalOpen === 'login' ? '로그인' : '회원가입'}
                    inputData={
                      modalOpen === 'login' ? inputData.slice(1, 3) : inputData
                    }
                  />
                </Modal>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const inputData = [
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
