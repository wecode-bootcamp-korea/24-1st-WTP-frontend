import React, { Component } from 'react';
import { ReactComponent as Star } from '../../../assets/icons/star4.svg';

import './InfoAct.scss';

class InfoAct extends Component {
  render() {
    const {
      onClick,
      onClickBtn,
      onMouseEnter,
      onMouseLeave,
      ratingComment,
      setHoverRating,
      setRating,
      clickBtn,
    } = this.props;

    const rightStyle = { transform: 'scaleX(-1)' };

    return (
      <div className="info-act">
        <button
          className={clickBtn ? 'act act-button' : 'act-button'}
          onClick={onClickBtn}
        >
          <div className="button-contents">
            <i className={clickBtn ? 'fas fa-bookmark' : 'fas fa-plus'}></i>
            <span className="button-text">보고싶어요</span>
          </div>
        </button>
        <div className="star-contents">
          <span>{ratingComment(setRating)}</span>
          <ul className="stars">
            {[1, 2, 3, 4, 5].map(index => {
              return (
                <React.Fragment key={index.id}>
                  <Star
                    index={index}
                    onClick={() => onClick(index - 0.5)}
                    onMouseEnter={() => onMouseEnter(index - 0.5)}
                    onMouseLeave={onMouseLeave}
                    width="20px"
                    fill={
                      setRating < index - 0.5
                        ? setHoverRating < index - 0.5
                          ? '#eeeeee'
                          : '#FEDD63'
                        : '#FEDD63'
                    }
                  />
                  <Star
                    index={index}
                    onClick={() => onClick(index)}
                    onMouseEnter={() => onMouseEnter(index)}
                    onMouseLeave={onMouseLeave}
                    width="20px"
                    style={rightStyle}
                    fill={
                      setRating < index
                        ? setHoverRating < index
                          ? '#eeeeee'
                          : '#FEDD63'
                        : '#FEDD63'
                    }
                  />
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default InfoAct;
