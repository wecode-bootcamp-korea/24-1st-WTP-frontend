import React, { Component } from 'react';
import './RatingStars.scss';

class RatingStars extends Component {
  render() {
    const { rating, index, onMouseEnter, onMouseLeave, onClick } = this.props;

    return (
      <div
        index={index}
        rating={rating}
        className="gray-star"
        onClick={() => onClick(index)}
        onMouseMove={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {index - rating === 0.5 && (
          <div className="half-star" index={index} rating={rating} />
        )}
        {index <= rating && (
          <div className="yellow-star" index={index} rating={rating} />
        )}
      </div>
    );
  }
}

export default RatingStars;
