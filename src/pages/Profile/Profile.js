import React, { Component } from 'react';
import './Profile.scss';

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-container">
          <div className="profile-container-top">톱니바퀴~</div>
          <div className="profile-container-middle">
            <img className="user-picture" alt="user" src="images/user.png" />
            <div className="profile-name">김영호</div>
            <div className="profile-detail">프로필이 없습니다.</div>
            <hr></hr>
            <div className="analysis">취향분석</div>
            <hr></hr>
          </div>
          <div className="profile-container-bottom">영화</div>
        </div>
      </div>
    );
  }
}
