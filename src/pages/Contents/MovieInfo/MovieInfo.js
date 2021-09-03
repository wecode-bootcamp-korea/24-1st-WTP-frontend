import React, { Component } from 'react';
import InfoAct from '../InfoAct/InfoAct';
import './MovieInfo.scss';

class MovieInfo extends Component {
  render() {
    const {
      onClick,
      onClickBtn,
      onMouseEnter,
      onMouseLeave,
      ratingComment,
      setRating,
      setHoverRating,
      isClicked,
      movie_details,
    } = this.props;

    const newDate =
      movie_details.release_date && movie_details.release_date.slice(0, 4);
    const genre = movie_details.genre && movie_details.genre.join('/');
    const country = movie_details.country && movie_details.country.join('/');

    console.log(genre);

    return (
      <section className="movie-info">
        <header>
          <img
            src={movie_details.poster_image}
            className="movie-poster"
            alt="영화 포스터"
          />
        </header>
        <article className="movie-info-all">
          <div className="movie-title">
            <h1 className="title">{movie_details.title}</h1>
            <p className="text">
              {newDate} ・ {genre} ・ {country}
            </p>
          </div>
          <span className="rating-star">
            평균 ★{movie_details.average_rating}
            <span className="rating-mystar">
              {setRating !== 0 ? `나의 평점 ★${setRating}` : ''}
            </span>
          </span>
          <InfoAct
            onClick={onClick}
            onClickBtn={onClickBtn}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ratingComment={ratingComment}
            setRating={setRating}
            setHoverRating={setHoverRating}
            isClicked={isClicked}
          />
        </article>
      </section>
    );
  }
}

export default MovieInfo;
