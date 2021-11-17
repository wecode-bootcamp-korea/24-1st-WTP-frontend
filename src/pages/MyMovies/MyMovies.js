import React, { Component } from 'react';
import { GET_MOVIES_BASIC } from '../../config';
import './MyMovies.scss';

export default class MyMovies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(`${GET_MOVIES_BASIC}mypage`, {
      headers: {
        authorization: localStorage.getItem('login-token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res.movies,
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
                    alt={movie.title}
                    src={movie.poster}
                  />
                  <div className="movie-name">{movie.title}</div>
                  <div className="movie-rating">평가함 ★ {movie.rating}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
