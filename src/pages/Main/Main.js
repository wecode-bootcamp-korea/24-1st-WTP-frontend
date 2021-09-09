import React, { Component } from 'react';
<<<<<<< HEAD
import MovieList from './MovieList/MovieList';
import './Main.scss';
import { GET_MOVIES_LIST } from '../../config';
=======
// import Modal from '../../components/Modal/Modal';
>>>>>>> main

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies1: [],
      movies2: [],
      movies3: [],
      movies4: [],
    };
  }

  getData = (key, api) => {
    fetch(`${GET_MOVIES_LIST}${api}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          [key]: data.MOVIE_LIST,
        });
      });
  };

  // getMockData = (key, api) => {
  //   fetch(`data/${api}.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         [key]: data.MOVIE_LIST,
  //       });
  //     });
  // };

  componentDidMount() {
    this.getData('movies1', 'country=한국');
    this.getData('movies2', 'country=외국');
    this.getData('movies3', 'genre1=드라마&genre2=로맨스');
    this.getData('movies4', 'rating=0');
  }

  // mock data
  // componentDidMount() {
  //   this.getMockData('movies1', 'KoreanMovies');
  //   this.getMockData('movies2', 'ForeignMovies');
  //   this.getMockData('movies3', 'DramaRomanceMovies');
  //   this.getMockData('movies4', 'MoviesRating');
  // }

  render() {
<<<<<<< HEAD
    const { movies1, movies2, movies3, movies4 } = this.state;
    return (
      <main className="main">
        <MovieList collectionMovies="한국 영화 순위" data={movies1} />
        <MovieList collectionMovies="외국 영화 순위" data={movies2} />
        <MovieList collectionMovies="드라마 로맨스 순위" data={movies3} />
        <MovieList collectionMovies="별점 높은 영화" data={movies4} />
      </main>
    );
=======
    return <div></div>;
>>>>>>> main
  }
}
