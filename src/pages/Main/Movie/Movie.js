import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
      movie_id,
    } = this.props.data;
    const released_year = released_date.substring(0, 4);
    const average_rating_number = Number(average_rating);
    const country = country_name[0];
    return (
      <div
        className={`Movie ${ranking}`}
        onClick={() => this.props.history.push(`/details/${movie_id}`)}
      >
        <div className="movie-poster-container">
          <img className="movie-poster" alt={movie_name} src={poster_image} />
          <div className="movie-ranking">{ranking}</div>
          {average_rating_number >= 4 && (
            <img
              className="atcha-logo"
              alt="atcha-logo"
              src="images/movie-poster-logo.png"
            />
          )}
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{movie_name}</h1>
          <div className="movie-product-info">
            <span>{released_year}</span>
            <span> ・ </span>
            <span>{country}</span>
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

export default withRouter(Movie);
