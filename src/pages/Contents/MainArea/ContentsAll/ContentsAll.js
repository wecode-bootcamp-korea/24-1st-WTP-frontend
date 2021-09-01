import React, { Component } from 'react';
import BasicInfo from '../ContentsThings/BasicInfo';
import Process from '../Producers/Process';
import SimilarThings from '../SimilarThings/SimilarThings';
import './ContentsAll.scss';

class ContentsAll extends Component {
  render() {
    return (
      <div className="contents-all">
        <BasicInfo />
        <Process />
        <SimilarThings />
      </div>
    );
  }
}

export default ContentsAll;
