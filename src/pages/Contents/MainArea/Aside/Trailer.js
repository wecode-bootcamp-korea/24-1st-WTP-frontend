import React, { Component } from 'react';
import TrailerVideo from './TrailerVideo';
import './Trailer.scss';

class Trailer extends Component {
  render() {
    return (
      <section className="trailer">
        <header className="trailer-title">
          <h2 className="title medium-title ">예고편</h2>
        </header>
        <TrailerVideo />
      </section>
    );
  }
}

export default Trailer;
