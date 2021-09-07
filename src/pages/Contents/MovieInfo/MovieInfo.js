import React, { Component } from 'react';
import InfoAct from '../InfoAct/InfoAct';
import './MovieInfo.scss';

class MovieInfo extends Component {
  toDate = year => {
    let sYear = year.substring(0, 4);
    let sMonth = year.substring(5, 7);
    let sDate = year.substring(8, 10);

    return `${Number(sYear)}년 ${Number(sMonth) - 1}월 ${Number(sDate)}일`;
  };

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
      clickBtn,
      movie_details,
    } = this.props;

    const { poster_image, title, release_date, average_rating, rating_users } =
      movie_details;

    const newDate =
      movie_details.release_date && movie_details.release_date.slice(0, 4);
    const genre = movie_details.genre && movie_details.genre.join('/');
    const country = movie_details.country && movie_details.country.join('/');

    return (
      <section className="movie-info">
        <header>
          <img src={poster_image} className="movie-poster" alt="영화 포스터" />
          <div className="movie-release">
            <span>개봉 일자 · </span>
            <span>{release_date && this.toDate(release_date)}</span>
          </div>
        </header>
        <article className="movie-info-all">
          <div className="movie-title">
            <h1 className="title">{title}</h1>
            <p className="text">
              {newDate} ・ {genre} ・ {country}
            </p>
          </div>
          <span className="rating-star">
            평균 ★{average_rating} ({rating_users}명)
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
            clickBtn={clickBtn}
          />
        </article>
      </section>
    );
  }
}

export default MovieInfo;
