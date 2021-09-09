import React, { Component } from 'react';
import './MyMovies.scss';

export default class MyMovies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  // componentDidMount() {
  //   fetch('http://10.58.1.85:8000/user/1')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         movies: data.RATED_MOVIES,
  //       });
  //     });
  // }

  //mock data
  componentDidMount() {
    fetch('data/WantSeeMovies.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.RATED_MOVIES,
        });
      });
  }

  render() {
    const { length } = this.state.movies;
    const { movies } = this.state;
    return (
      <div className="mymovies">
        <div className="movie">영화</div>
        <div className="mymovies-container">
          <div className="evaluation">
            평가
            <span className="number-of-movies">{length}</span>
          </div>
          <div className="movie-list">
            {movies.map((movie, index) => {
              return (
                <div className="movie-wrap" key={index}>
                  <img
                    className="movie-poster"
                    alt={movie.movie_name}
                    src={movie.poster_image}
                  />
                  <div className="movie-name">{movie.movie_name}</div>
                  <div className="movie-rating">
                    평가함 ★ {movie.movie_rating}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
