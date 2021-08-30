import React, { Component } from 'react';
import SimilarContents from './SimilarContents';

class SimilarThings extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>비슷한 작품</h2>
        </header>
        <div>
          <SimilarContents />
        </div>
      </div>
    );
  }
}

export default SimilarThings;
