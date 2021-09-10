import React, { Component } from 'react';
import { MOVIES_LIST } from '../../config';
import SearchBar from '../SearchBar/SearchBar';

export class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(`${MOVIES_LIST}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          movies: res.MOVIE_LIST,
        })
      );
  }

  render() {
    const { movies } = this.state;
    const { userInput, searchClicked, handleSearch, searchTitle } = this.props;

    const filteredMovies = movies.filter(movie => {
      return movie.movie_name.includes(userInput);
    });

    return (
      <>
        <input
          name="userInput"
          type="text"
          className="search-input"
          placeholder="작품 제목을 검색해보세요."
          onClick={handleSearch}
          onChange={searchTitle}
        />
        {searchClicked && (
          <SearchBar
            movies={movies}
            onClick={this.onClick}
            filteredMovies={filteredMovies}
          />
        )}
      </>
    );
  }
}

export default SearchInput;
