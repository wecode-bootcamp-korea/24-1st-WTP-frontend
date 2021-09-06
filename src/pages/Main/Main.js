import React, { Component } from 'react';
import MovieList from './MovieList/MovieList';
import './Main.scss';
// import { GET_KOREAN_MOVIES, FOREIGN_MOVIES } from '../../config';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      // movies: [],
      movies1: [],
      movies2: [],
      movies3: [],
      movies4: [],
    };
  }

  // componentDidMount() {
  //   fetch('http://10.58.6.107:8000/movie?country=외국')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .then(data => {
  //       this.setState({
  //         movies1: data.FOREIGN_MOVIES,
  //         // isLoading: false,
  //       });
  //     });

  //   fetch('http://10.58.6.107:8000/movie?country=한국')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .then(data => {
  //       this.setState({
  //         movies2: data.KOREAN_MOVIES,
  //         // isLoading: false,
  //       });
  //     });
  // }

  // mock data
  componentDidMount() {
    fetch('data/KoreanMovies.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies1: data.MOVIE_LIST,
        });
      });

    fetch('data/ForeignMovies.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies2: data.MOVIE_LIST,
        });
      });

    fetch('data/DramaRomanceMovies.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies3: data.MOVIE_LIST,
        });
      });

    fetch('data/MoviesRating.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies4: data.MOVIE_LIST,
        });
      });

    // this.handleFetch('KoreanMovies');
    // this.handleFetch('ForeignMovies');
    // this.handleFetch('DramaRomanceMovies');
    // this.handleFetch('MoviesRating');
  }

  // handleFetch = api => {
  //   fetch(`data/${api}.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         movies: [...this.state.movies, data.MOVIE_LIST],
  //       });
  //     });
  // };

  render() {
    const { movies1, movies2, movies3, movies4 } = this.state;
    return (
      <div className="main">
        <main>
          {/* <MovieList collectionMovies="한국 영화 순위" data={KoreanMovies} /> */}
          <MovieList collectionMovies="한국 영화 순위" data={movies1} />
          <MovieList collectionMovies="외국 영화 순위" data={movies2} />
          <MovieList collectionMovies="드라마 로맨스 순위" data={movies3} />
          <MovieList collectionMovies="별점 높은 영화" data={movies4} />
        </main>
      </div>
    );
  }
}
