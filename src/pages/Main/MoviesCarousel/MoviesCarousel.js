import React, { Component } from 'react';
import './MoviesCarousel.scss';

class MoviesCarousel extends Component {
  render() {
    return (
      <div className="moviescarousel">
        캐러셀
        <img className="carousel-poster" alt="poster" src="images/1.jpeg" />
      </div>
    );
  }
}

export default MoviesCarousel;
