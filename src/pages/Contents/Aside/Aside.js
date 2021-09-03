import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import './Aside.scss';

class Aside extends Component {
  render() {
    return (
      <div className="aside-all">
        <Gallery />
      </div>
    );
  }
}

export default Aside;
