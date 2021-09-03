import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import './MovieList.scss';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movieMoveCount: 0,
    };
  }

  plusMoveCount = () => {
    const { movieMoveCount } = this.state;
    const { length } = this.props.data;
    const maxCount = Math.ceil(length / 5 - 1);
    if (length === 0) return;
    if (movieMoveCount === maxCount) return;
    // !length || movieMoveCount === maxCount return;

    this.setState({
      movieMoveCount: movieMoveCount + 1,
    });
  };

  minusMoveCount = () => {
    const { movieMoveCount } = this.state;
    if (movieMoveCount === 0) return;
    this.setState({
      movieMoveCount: movieMoveCount - 1,
    });
  };
  render() {
    const { movieMoveCount } = this.state;
    const marginLeftValue = this.state.movieMoveCount * -1350;
    const marginLeft = marginLeftValue.toString();
    const { collectionMovies, data } = this.props;
    const { minusMoveCount, plusMoveCount } = this;
    const { length } = this.props.data;
    const maxCount = Math.ceil(length / 5 - 1);
    return (
      <div className="movielist">
        <h1 className="movies-list-title">{collectionMovies}</h1>
        <div className="movie-list">
          {movieMoveCount && (
            <div
              className="movie-move-arrow left-arrow"
              onClick={minusMoveCount}
            >
              &#60;
            </div>
          )}
          <div className="movies">
            <div className="slide" style={{ marginLeft: `${marginLeft}px` }}>
              {data.map((movie, index) => {
                return (
                  <Movie
                    ranking={index + 1}
                    key={`movie${index}`}
                    id={index}
                    data={movie}
                  />
                );
              })}
            </div>
          </div>
          {movieMoveCount <= maxCount - 1 && (
            <div
              className="movie-move-arrow right-arrow"
              onClick={plusMoveCount}
            >
              &#62;
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MovieList;
