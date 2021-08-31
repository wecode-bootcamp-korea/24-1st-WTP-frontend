import React, { Component } from 'react';
import Background from './Background/Background';
import MainArea from './MainArea/MainArea';
import './Contents.scss';

export default class Contents extends Component {
  render() {
    return (
      <div className="contents">
        <div className="background">
          <Background />
        </div>
        <div className="main">
          <MainArea />
        </div>
      </div>
    );
  }
}
