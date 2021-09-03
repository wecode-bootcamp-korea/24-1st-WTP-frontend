import React, { Component } from 'react';
import LeftStar from './Stars/LeftStar';
import RightStar from './Stars/RightStar';

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
      isClicked,
    } = this.props;

    return (
      <div className="info-act">
        <button
          className={isClicked ? 'act act-button' : 'act-button'}
          onClick={onClickBtn}
        >
          <div className="button-contents">
            <i className={isClicked ? 'fas fa-bookmark' : 'fas fa-plus'}></i>
            <span className="button-text">보고싶어요</span>
          </div>
        </button>

        <div className="star-contents">
          <span>{ratingComment(setRating)}</span>
          <ul className="stars">
            {[1, 2, 3, 4, 5].map(index => {
              return (
                <>
                  <LeftStar
                    key={index.id}
                    index={index - 0.5}
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    fill={
                      setRating < index - 0.5
                        ? setHoverRating < index - 0.5
                          ? '#eeeeee'
                          : '#FEDD63'
                        : '#FEDD63'
                    }
                  />
                  <RightStar
                    key={index.id}
                    index={index}
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    fill={
                      setRating < index
                        ? setHoverRating < index
                          ? '#eeeeee'
                          : '#FEDD63'
                        : '#FEDD63'
                    }
                  />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default InfoAct;
