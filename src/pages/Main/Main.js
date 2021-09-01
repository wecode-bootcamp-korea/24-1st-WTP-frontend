import React, { Component } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount() {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.data.movies,
          isLoading: false,
        });
      });
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div className="Main">
        {/*  // 왓챠피디아에 없음 추가 구현 */}
        {isLoading ? (
          <div className="loading">
            <div>Loading...</div>
          </div>
        ) : (
          <main>
            <MovieList collectionMovies="박스오피스 순위" data={movies} />
            <MovieList collectionMovies="왓챠 영화 순위" data={movies} />
            <MovieList collectionMovies="넷플릭스 영화 순위" data={movies} />
          </main>
        )}
      </div>
    );
  }
}
