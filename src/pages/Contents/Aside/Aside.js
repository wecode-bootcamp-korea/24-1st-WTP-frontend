import React, { Component } from 'react';
import './Aside.scss';

class Aside extends Component {
  render() {
    const { trailer, image } = this.props;
    const thumnail = `https://img.youtube.com/vi/${trailer}/0.jpg`;
    const linkVideo = `https://www.youtube.com/watch?v=${trailer}`;

    return (
      <div className="aside-all">
        <section className="gallery">
          <h2 className="title medium-title ">갤러리</h2>
          <ul className="gallery-pictures">
            {image &&
              image.map(image => {
                return (
                  <li className="gallery-picture-sec">
                    <img
                      src={image}
                      className="gallery-picture"
                      alt="갤러리 사진"
                    />
                  </li>
                );
              })}
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
        </section>{' '}
      </div>
    );
  }
}

export default Aside;
