import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
  render() {
    const { movies, filteredMovies } = this.props;

    return (
      <div className="navmodal" onClick={this.props.onClick}>
        <div className="wrapper">
          <div className="related-search">연관 검색어</div>
          <div className="related-movie">
            {filteredMovies.length !== movies.length &&
              filteredMovies.map(movie => {
                return <p className="pTag">{movie.movie_name}</p>;
              })}
          </div>
          <div className="popular-search">인기 검색어</div>
          <div className="popular-movie">D.P.</div>
          <div className="popular-movie">인간실격</div>
          <div className="popular-movie">종이의 집</div>
          <div className="popular-movie">샹치와 텐 링즈의 전설</div>
          <div className="popular-movie">진주 귀걸이를 한 소녀</div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
