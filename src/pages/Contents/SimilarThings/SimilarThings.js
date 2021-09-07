import React, { Component } from 'react';
import './SimilarThings.scss';

class SimilarThings extends Component {
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
                  <li className="similarcontent">
                    <a href="/">
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
                      <p className="similar-star small-text">
                        평균 ★{genre.avg}
                      </p>
                    </a>
                  </li>
                );
              })}
            ;
          </ul>
        </div>
      </section>
    );
  }
}

export default SimilarThings;
