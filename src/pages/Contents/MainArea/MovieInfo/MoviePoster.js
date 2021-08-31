import React, { Component } from 'react';
import './MoviePoster.scss';

class MoviePoster extends Component {
  render() {
    return (
      <div className="movie-poster-all">
        <img
          src="/images/poster.jpeg"
          className="movie-poster"
          alt="영화 포스터"
        />
      </div>
    );
  }
}

export default MoviePoster;
