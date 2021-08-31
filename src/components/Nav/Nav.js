import React, { Component } from 'react';
import './Nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="atcha-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png"
                alt="logo"
              />
            </div>
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
            <button className="btn-login">로그인</button>
            <button className="btn-signup">회원가입</button>
          </div>
        </div>
      </nav>
    );
  }
}
