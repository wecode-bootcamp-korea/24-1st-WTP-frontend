import React, { Component } from 'react';
import GalleryPictures from './GalleryPictures';
import './Gallery.scss';

class Gallery extends Component {
  render() {
    return (
      <section className="gallery">
        <header className="gallery-title">
          <h2 className="title medium-title ">갤러리</h2>
        </header>
        <GalleryPictures />
      </section>
    );
  }
}

export default Gallery;
