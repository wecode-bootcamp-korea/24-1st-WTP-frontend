import React, { Component } from 'react';
import { USERS_LIST } from '../../config';
import ProfileModal from './ProfileModal/ProfileModal';
import './Profile.scss';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      mymovies: [],
    };
  }

  componentDidMount() {
    fetch(`${USERS_LIST}/mypage`, {
      headers: {
        authorization: localStorage.getItem('login-token'),
      },
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          mymovies: res.movies,
        })
      );
  }

  click = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  };
  render() {
    const { click } = this;
    const { mymovies } = this.state;
    return (
      <div className="profile">
        <div className="profile-container">
          <div className="profile-container-top">
            <img
              className="options"
              alt="options"
              src="/images/gear.png"
              onClick={click}
            />
          </div>
          <div className="profile-container-middle">
            <img className="user-picture" alt="user" src="images/user.png" />
            <div className="profile-info">
              <div className="info-top">
                <div className="profile-name">위코드</div>
                <img
                  className="atcha-logo"
                  alt="atcha-logo"
                  src="images/atcha-logo.png"
                />
              </div>
              <div className="profile-detail">프로필이 없습니다.</div>
            </div>
            <div className="analysis">
              <img className="graph" alt="graph" src="images/bar-chart.png" />
              <div className="analysis-text">취향분석</div>
            </div>
          </div>
          <Link to="/mymovies">
            <div className="profile-container-bottom">
              <div className="bottom-top">
                <div className="bottom-top-movie">영화</div>
                <br />
                <div className="bottom-top-star">★ {mymovies.length}</div>
              </div>
              <div className="bottom-bottom"></div>
            </div>
          </Link>
        </div>
        {this.state.modal && <ProfileModal click={click} />}
      </div>
    );
  }
}
