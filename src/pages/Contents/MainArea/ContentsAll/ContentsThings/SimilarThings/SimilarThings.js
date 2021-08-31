import React, { Component } from 'react';
import SimilarContents from './SimilarContents';
import './SimilarThings.scss';

class SimilarThings extends Component {
  render() {
    return (
      <div className="similar-things">
        <header className="title">
          <h2 className="medium-title">비슷한 작품</h2>
        </header>
        <div className="similar-content">
          <SimilarContents />
        </div>
      </div>
    );
  }
}

export default SimilarThings;
