import React, { Component } from 'react';
import './Background.scss';

class Background extends Component {
  render() {
    return (
      <section className="background">
        <div className="background-gradient"></div>
        <img
          src="/images/a4d2dd681002aaf17c39edfb948a217d.jpeg"
          className="background-image"
          alt="메인 이미지"
        />
      </section>
    );
  }
}

export default Background;
