import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import SearchInput from '../SearchInput/SearchInput';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: '',
      userInput: '',
      logined: true,
      searchClicked: false,
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

  searchTitle = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { modalOpen, userInput, searchClicked } = this.state;
    const { openModal, closeModal, searchTitle } = this;

    const handleLogout = () => {
      alert('로그아웃 되었습니다.');
      localStorage.removeItem('login-token');
      this.setState({
        logined: false,
      });
    };

    const handleSearch = () => {
      this.setState({
        searchClicked: !this.state.searchClicked,
      });
    };

    return (
      <>
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
                  <SearchInput
                    userInput={userInput}
                    searchClicked={searchClicked}
                    handleSearch={handleSearch}
                    searchTitle={searchTitle}
                  />
                </div>
              </div>
              <div className="btn-container">
                {localStorage.length === 0 ||
                !localStorage.getItem('login-token') ? (
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
                    <Link to="/profile" className="profile-container">
                      <i className="far fa-user-circle"></i>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        {modalOpen && (
          <Modal open={modalOpen} close={closeModal}>
            <Form
              type={modalOpen}
              title={modalOpen === 'login' ? '로그인' : '회원가입'}
              inputData={
                modalOpen === 'login' ? inputData.slice(1, 3) : inputData
              }
              openModal={openModal}
            />
          </Modal>
        )}
      </>
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
