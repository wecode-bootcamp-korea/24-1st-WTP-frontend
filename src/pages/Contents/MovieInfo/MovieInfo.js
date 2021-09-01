import React, { Component } from 'react';
import InfoAct from '../InfoAct/InfoAct';
import './MovieInfo.scss';

class MovieInfo extends Component {
  render() {
    return (
      <section className="movie-info">
        <div className="movie-poster-all">
          <img
            src="/images/poster.jpeg"
            className="movie-poster"
            alt="영화 포스터"
          />
        </div>{' '}
        <article className="movie-info-all">
          <div className="movie-title">
            <h1 className="title">샹치와 텐 링즈의 전설</h1>
            <p className="text">2021 ・ 액션/모험/판타지 ・ 미국/중국/호주</p>
          </div>{' '}
          <InfoAct />
        </article>
      </section>
    );
  }
}

export default MovieInfo;
