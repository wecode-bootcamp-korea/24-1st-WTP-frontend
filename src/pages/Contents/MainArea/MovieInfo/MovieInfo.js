import React, { Component } from 'react';
import MoviePoster from './MoviePoster';
import MovieTitle from './MovieTitle';
import InfoAct from '../InfoAct/InfoAct';
import './MovieInfo.scss';

class MovieInfo extends Component {
  render() {
    return (
      <section className="movie-info">
        <MoviePoster />
        <article className="movie-info-all">
          <MovieTitle />
          <InfoAct />
        </article>
      </section>
    );
  }
}

export default MovieInfo;
