import React, { Component } from 'react';
import './Gallery.scss';

class Gallery extends Component {
  state = {
    trailer: '',
  };

  componentDidMount() {
    fetch('http://10.58.3.64:8000/movies/34', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => this.setState({ trailer: data.movie_info.trailer }));
  }

  render() {
    const { trailer } = this.state;
    const thumnail = `https://img.youtube.com/vi/${trailer}/0.jpg`;
    const linkVideo = `https://www.youtube.com/watch?v=${trailer}`;

    return (
      <>
        <section className="gallery">
          <h2 className="title medium-title ">갤러리</h2>
          <ul className="gallery-pictures">
            <li className="gallery-picture-sec">
              <img
                src={thumnail}
                className="gallery-picture"
                alt="갤러리 사진"
              />
            </li>
          </ul>
        </section>
        <section className="gallery">
          <h2 className="title medium-title ">예고편</h2>
          <ul className="gallery-pictures">
            <li className="gallery-picture-sec">
              <a
                href={linkVideo}
                target="_blank"
                rel="noreferrer"
                className="for-hover"
              >
                <img
                  src={thumnail}
                  className="trailer-picture"
                  onMouseEnter={this.onMouseEnter}
                  alt="메인 예고편"
                />
                <i className="far fa-play-circle"></i>
              </a>
            </li>
          </ul>
        </section>
      </>
    );
  }
}

export default Gallery;
