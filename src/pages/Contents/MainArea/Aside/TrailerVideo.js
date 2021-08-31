import React, { Component } from 'react';
import './TrailerVideo.scss';

class TrailerVideo extends Component {
  render() {
    return (
      <ul className="trailer-pictures">
        <li className="trailer-picture-sec">
          <img
            src="/images/trailer.jpeg"
            className="trailer-picture"
            alt="예고편 영상"
          />
          <p className="trailer-text medium-text">메인 예고편</p>
        </li>
        <li className="trailer-picture-sec">
          <img
            src="/images/trailer.jpeg"
            className="trailer-picture"
            alt="예고편 영상"
          />
          <p className="trailer-text medium-text">메인 예고편</p>
        </li>
        <li className="trailer-picture-sec">
          <img
            src="/images/trailer.jpeg"
            className="trailer-picture"
            alt="예고편 영상"
          />
          <p className="trailer-text medium-text">메인 예고편</p>
        </li>
      </ul>
    );
  }
}

export default TrailerVideo;
