import React, { Component } from 'react';
import BasicInfo from '../BasicInfo/BasicInfo';
import Process from '../Process/Process';
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
