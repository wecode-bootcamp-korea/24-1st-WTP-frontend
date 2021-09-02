import React, { Component } from 'react';
import './Movie.scss';

class Movie extends Component {
  render() {
    const { ranking } = this.props;
    const { title, medium_cover_image, year } = this.props.data;
    return (
      <div className={`Movie ${ranking}`}>
        <div className="movie-poster-container">
          <img className="movie-poster" alt={title} src={medium_cover_image} />
          <div className="movie-rating">{ranking}</div>
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{title}</h1>
          <div className="movie-product-info">
            <span>{year}</span>
            <span> ・ </span>
            <span>미국</span>
          </div>
          <div className="movie-audience-info">
            <span>예매율 50%</span>
            <span> ・ </span>
            <span>누적 관객 7,777명</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
