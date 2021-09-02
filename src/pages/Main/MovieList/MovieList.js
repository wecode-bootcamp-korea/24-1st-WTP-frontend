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
    if (movieMoveCount === 0) return;
    if (movieMoveCount === maxCount) return;
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
    const marginLeftValue = this.state.movieMoveCount * -1358;
    const marginLeft = marginLeftValue.toString();
    const { collectionMovies, data } = this.props;
    const { minusMoveCount, plusMoveCount } = this;

    return (
      <div className="movielist">
        <h1 className="movies-list-title">{collectionMovies}</h1>
        <div className="movie-list">
          {movieMoveCount ? (
            <div
              className="movie-move-arrow letf-arrow"
              onClick={minusMoveCount}
            >
              &#60;
            </div>
          ) : null}
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
          {/* 수정 해야함 */}
          {movieMoveCount <= movieMoveCount - 2 && (
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
