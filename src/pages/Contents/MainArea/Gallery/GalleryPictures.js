import React, { Component } from 'react';
import './GalleryPictures.scss';

class GalleryPictures extends Component {
  render() {
    return (
      <ul className="gallery-pictures">
        <li className="gallery-picture-sec">
          <img
            src="/images/gallery.jpeg"
            className="gallery-picture"
            alt="갤러리 사진"
          />
        </li>
        <li className="gallery-picture-sec">
          <img
            src="/images/gallery.jpeg"
            className="gallery-picture"
            alt="갤러리 사진"
          />
        </li>
        <li className="gallery-picture-sec">
          <img
            src="/images/gallery.jpeg"
            className="gallery-picture"
            alt="갤러리 사진"
          />
        </li>
        <li className="gallery-picture-sec">
          <img
            src="/images/gallery.jpeg"
            className="gallery-picture"
            alt="갤러리 사진"
          />
        </li>
      </ul>
    );
  }
}

export default GalleryPictures;
