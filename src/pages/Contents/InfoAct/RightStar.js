import React, { Component } from 'react';
import { ReactComponent as Star } from '../../../assets/icons/star4.svg';
import './RightStar.scss';

class RatingStars extends Component {
  render() {
    const { index, onMouseEnter, onMouseLeave, onClick, fill } = this.props;

    return (
      <Star
        className="right-star"
        onClick={() => onClick(index)}
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
        width="20px"
        fill={fill}
      />
    );
  }
}

export default RatingStars;
