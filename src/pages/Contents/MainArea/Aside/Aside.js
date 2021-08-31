import React, { Component } from 'react';
import Gallery from './Gallery';
import Trailer from './Trailer';
import './Aside.scss';

class Aside extends Component {
  render() {
    return (
      <div className="aside-all">
        <Gallery />
        <Trailer />
      </div>
    );
  }
}

export default Aside;
