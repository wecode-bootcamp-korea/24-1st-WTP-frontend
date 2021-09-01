import React, { Component } from 'react';
import { ReactComponent as Star } from '../../../assets/icons/pointed-star.svg';

class RatingStars extends Component {
  // console.log(this.props.hoverRating);

  render() {
    const { index, onMouseEnter, onMouseLeave, onClick, fill } = this.props;

    return (
      <Star
        onClick={() => onClick(index)}
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
        width="40px"
        height="40px"
        fill={fill}
      />
    );
  }
}

export default RatingStars;
