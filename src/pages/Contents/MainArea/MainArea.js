import React, { Component } from 'react';
import ContentsAll from './ContentsAll/ContentsAll';
import MovieInfo from './MovieInfo/MovieInfo';
import Aside from './Aside/Aside';

class MainArea extends Component {
  render() {
    return (
      <div>
        <MovieInfo />
        <ContentsAll />
        <Aside />
      </div>
    );
  }
}

export default MainArea;
