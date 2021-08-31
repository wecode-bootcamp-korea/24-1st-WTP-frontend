import React, { Component } from 'react';
import './MovieTitle.scss';

class MovieTitle extends Component {
  render() {
    return (
      <div className="movie-title">
        <h1 className="title">샹치와 텐 링즈의 전설</h1>
        <p className="text">2021 ・ 액션/모험/판타지 ・ 미국/중국/호주</p>
      </div>
    );
  }
}

export default MovieTitle;
