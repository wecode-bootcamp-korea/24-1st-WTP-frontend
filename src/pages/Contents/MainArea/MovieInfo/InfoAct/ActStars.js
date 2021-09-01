import React, { Component } from 'react';
import { ReactComponent as Star } from '../../../../../assets/icons/pointed-star.svg';
import './ActStars.scss';

class ActStars extends Component {
  render() {
    return (
      <div className="star-contents">
        <span>평가하기</span>
        <div>
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

export default ActStars;
