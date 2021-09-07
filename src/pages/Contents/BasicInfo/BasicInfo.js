import React, { Component } from 'react';
import './BasicInfo.scss';

class BasicInfo extends Component {
  wrapRef = React.createRef();

  onClickMore = e => {
    this.wrapRef.current.classList.add('show');
    e.currentTarget.classList.add('hide');
  };

  render() {
    const { movie_details } = this.props;
    const { title, country, genre, description } = movie_details;
    const newDate =
      movie_details.release_date && movie_details.release_date.slice(0, 4);

    return (
      <section className="basic-info">
        <header className="title">
          <h2 className="medium-title">기본 정보</h2>
        </header>
        <article className="info-summary">
          <p className="little-summary">{title}</p>
          <p className="little-summary">
            {newDate} · {country && country} · {genre && genre[0]}
          </p>
          {/* <p className="little-summary">2시간 12분 · 12세</p> */}
          <ellipse ref={this.wrapRef} className="story-summary">
            {description}
          </ellipse>
          <button onClick={this.onClickMore}>...더보기</button>
        </article>
      </section>
    );
  }
}

export default BasicInfo;
