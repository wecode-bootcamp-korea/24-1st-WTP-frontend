import React, { Component } from 'react';
import MovieList from './MovieList/MovieList';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movies1: [],
      movies2: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.3.36:8000/movie?country=외국')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => {
        this.setState({
          movies1: data.FOREIGN_MOVIES,
          // isLoading: false,
        });
      });

    fetch('http://10.58.3.36:8000/movie?country=한국')
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies2: data.KOREAN_MOVIES,
          // isLoading: false,
        });
      });
  }

  // 외부 api
  // componentDidMount() {
  //   fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         movies: data.data.movies,
  //         isLoading: false,
  //       });
  //     });
  // }

  render() {
    const { movies1, movies2, isLoading } = this.state;
    return (
      <div className="main">
        {/*  // 왓챠피디아에 없음 추가 구현 */}
        {/* {isLoading ? (
          <div className="loading">
            <div>Loading...</div>
          </div>
        ) : ( */}
        <main>
          <MovieList collectionMovies="외국 영화 순위" data={movies1} />
          <MovieList collectionMovies="한국 영화 순위" data={movies2} />
          {/* <MovieList collectionMovies="넷플릭스 영화 순위" data={movies} /> */}
        </main>
        {/* )} */}
      </div>
    );
  }
}
