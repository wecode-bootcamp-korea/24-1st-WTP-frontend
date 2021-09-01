import React, { Component } from 'react';
import RatingStars from './RatingStars';
import './InfoAct.scss';

class InfoAct extends Component {
  state = {
    setRating: 0,
    setHoverRating: 0,
  };

  onClick = index => {
    this.setState({ setRating: index });
    // console.log(this.state.setRating);
  };

  onMouseEnter = index => {
    this.setState({ setHoverRating: index });
    // console.log(this.state.setHoverRating);
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
