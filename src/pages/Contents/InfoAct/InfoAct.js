import React, { Component } from 'react';
import { ReactComponent as Star } from '../../../assets/icons/pointed-star.svg';
import './InfoAct.scss';

class InfoAct extends Component {
  render() {
    return (
      <div className="info-act">
        <button className="act-button">
          <div className="button-contents">
            <span className="button-svg">
              <i className="fas fa-plus"></i>
            </span>
            <span className="button-text">보고싶어요</span>
          </div>
        </button>
        <div className="star-contents">
          <span>평가하기</span>
          <ul className="stars">
            <Star width="40px" height="40px" fill="#eeee" />
            <Star width="40px" height="40px" fill="#eeee" />
            <Star width="40px" height="40px" fill="#eeee" />
            <Star width="40px" height="40px" fill="#eeee" />
            <Star width="40px" height="40px" fill="#eeee" />
          </ul>
        </div>
      </div>
    );
  }
}

export default InfoAct;
