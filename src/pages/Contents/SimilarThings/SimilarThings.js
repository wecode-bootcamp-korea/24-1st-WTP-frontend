import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SimilarThings.scss';

class SimilarThings extends Component {
  goToDetail = genre => {
    this.props.history.push(`/details/${genre.movie_id}`);

    // window.location.replace 메소드를 사용하게 되면 페이지 자체가 새로고침 되기 때문에 효율적이지 않다.
    // window.location.replace(`/details/${genre.movie_id}`);
  };

  render() {
    const { related_movies } = this.props;

    return (
      <section className="similar-things">
        <h2 className="title medium-title">비슷한 작품</h2>
        <div className="similar-content">
          <ul className="similarcontent-all">
            {related_movies &&
              related_movies.map(genre => {
                return (
                  <li
                    className="similarcontent"
                    key={genre.id}
                    id={genre.id}
                    onClick={() => this.goToDetail(genre)}
                  >
                    <div>
                      <img
                        src={genre.poster}
                        className="similarcontent-poster"
                        alt="비슷한 작품 포스터"
                      />
                    </div>
                    <div className="similar-title medium-text">
                      {genre.title}
                    </div>
                    <p className="similar-star small-text">평균 ★{genre.avg}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    );
  }
}

export default withRouter(SimilarThings);
