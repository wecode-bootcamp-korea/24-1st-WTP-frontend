import React, { Component } from 'react';
import Login from '../Login/Login';
// import Dimmer from '../Dimmer/Dimmer';
import './Nav.scss';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
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
                  <input
                    className="search-input"
                    placeholder="작품 제목, 배우, 감독을 검색해보세요."
                    type="text"
                  />
                </div>
              </div>
              <button className="btn-login" onClick={this.openModal}>
                로그인
              </button>
              <Login isOpen={this.state.isModalOpen} close={this.closeModal} />
              <button className="btn-signup">회원가입</button>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
