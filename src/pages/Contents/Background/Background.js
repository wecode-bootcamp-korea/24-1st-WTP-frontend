import React, { Component } from 'react';

class Background extends Component {
  render() {
    return (
      <div>
        <img
          src="/images/a4d2dd681002aaf17c39edfb948a217d.jpeg"
          className="background-image"
          alt="메인 이미지"
        />
        <div className="background-box"></div>
      </div>
    );
  }
}

export default Background;
