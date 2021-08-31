import React, { Component } from 'react';
import ContentsAll from './ContentsAll/ContentsAll';
import MovieInfo from './MovieInfo/MovieInfo';
import Aside from './Aside/Aside';
import './MainArea.scss';

class MainArea extends Component {
  render() {
    return (
      <div>
        <MovieInfo />
        <div className="main-contents">
          <ContentsAll />
          <Aside />
        </div>
      </div>
    );
  }
}

export default MainArea;
