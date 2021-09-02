import React, { Component } from 'react';
import './Movie.scss';

class Movie extends Component {
  render() {
    const { ranking } = this.props;
    const {
      movie_name,
      poster_image,
      released_date,
      country_name,
      average_rating,
    } = this.props.data;
    const released_year = released_date.substring(0, 4);
    return (
      <div className={`Movie ${ranking}`}>
        <div className="movie-poster-container">
          <img className="movie-poster" alt={movie_name} src={poster_image} />
          <div className="movie-rating">{ranking}</div>
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{movie_name}</h1>
          <div className="movie-product-info">
            <span>{released_year}</span>
            <span> ・ </span>
            <span>{country_name ? country_name : '한국'}</span>
          </div>
          <div className="movie-audience-info">
            <span>평균</span>
            <span> ★ </span>
            <span>{average_rating}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
