import React, { Component } from 'react';
import Producers from './Producers';
import './Process.scss';

class Process extends Component {
  render() {
    return (
      <section className="process">
        <header className="title">
          <h2 className="medium-title">출연/제작</h2>
        </header>
        <div className="process-all">
          <Producers />
        </div>
      </section>
    );
  }
}

export default Process;
