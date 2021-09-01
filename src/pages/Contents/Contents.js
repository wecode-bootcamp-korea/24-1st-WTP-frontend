import React, { Component } from 'react';
import ContentsAll from './ContentsAll/ContentsAll';
import MovieInfo from './MovieInfo/MovieInfo';
import Aside from './Aside/Aside';
import './Contents.scss';

export default class Contents extends Component {
  render() {
    return (
      <div className="contents">
        <div className="background">
          <section className="background">
            <div className="background-gradient"></div>
            <img
              src="/images/a4d2dd681002aaf17c39edfb948a217d.jpeg"
              className="background-image"
              alt="메인 이미지"
            />
          </section>
        </div>
        <div className="main">
          <MovieInfo />
          <div className="main-contents">
            <ContentsAll />
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}
