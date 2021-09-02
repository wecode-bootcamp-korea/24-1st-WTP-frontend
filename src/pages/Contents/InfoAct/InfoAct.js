import React, { Component } from 'react';
import RatingStars from './RatingStars';
import './InfoAct.scss';

class InfoAct extends Component {
  state = {
    setRating: 0,
    setHoverRating: 0,
    comments: '',
  };

  onClick = index => {
    this.setState({ setRating: index });
    if (this.state.setRating === index) {
      this.setState({ setRating: 0 });
    }
  };

  onMouseEnter = index => {
    this.setState({ setHoverRating: index });
    if (this.state.setRating === index) {
      console.log('삭제하기');
    }
  };

  onMouseLeave = () => {
    this.setState({ setHoverRating: 0 });
  };

  render() {
    return (
      <div className="info-act">
        <button className="act-button">
          <div className="button-contents">
            <span className="button-svg">
              <i className="fas fa-plus"></i>
            </span>
            <span className="button-text">보고싶어요</span>
          </div>
        </button>
        <div className="star-contents">
          <span>{this.state.setRating}</span>
          <ul className="stars">
            {[1, 2, 3, 4, 5].map(index => {
              return (
                <RatingStars
                  index={index}
                  onClick={this.onClick}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                  fill={
                    this.state.setRating < index
                      ? this.state.setHoverRating < index
                        ? '#eeee'
                        : '#FEDD63'
                      : '#FEDD63'
                  }
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default InfoAct;
