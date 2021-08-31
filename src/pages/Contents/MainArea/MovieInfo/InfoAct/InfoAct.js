import React, { Component } from 'react';
import ActStars from './ActStars';
import './InfoAct.scss';

class InfoAct extends Component {
  render() {
    return (
      <div>
        <button className="act-button">
          <div className="button-contents">
            <span className="button-svg">
              <i className="fas fa-plus"></i>
            </span>
            <span className="button-text">보고싶어요</span>
          </div>
        </button>
        <ActStars />
      </div>
    );
  }
}

export default InfoAct;
