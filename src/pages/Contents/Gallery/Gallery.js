import React, { Component } from 'react';
import './Gallery.scss';

class Gallery extends Component {
  render() {
    return (
      <section className="gallery">
        <h2 className="title medium-title ">갤러리</h2>
        <ul className="gallery-pictures">
          <li className="gallery-picture-sec">
            <img
              src="/images/gallery.jpeg"
              className="gallery-picture"
              alt="갤러리 사진"
            />
          </li>
        </ul>{' '}
      </section>
    );
  }
}

export default Gallery;
