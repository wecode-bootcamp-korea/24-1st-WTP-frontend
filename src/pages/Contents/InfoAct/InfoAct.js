import React, { Component } from 'react';
import LeftStar from './LeftStar';
import RightStar from './RightStar';

import './InfoAct.scss';

class InfoAct extends Component {
  state = {
    setRating: 0,
    setHoverRating: 0,
    isClicked: false,
  };

  onClickBtn = () => {
    this.setState({ isClicked: !this.state.isClicked });
    console.log(this.state.isClicked);
  };

  onClick = index => {
    this.setState({ setRating: index });
    if (this.state.setRating === index) {
      this.setState({ setRating: 0 });
    }
  };

  onMouseEnter = index => {
    this.setState({ setHoverRating: index });
    console.log(index);
    if (this.state.setRating === index) {
      console.log('삭제하기');
    }
  };

  onMouseLeave = () => {
    this.setState({ setHoverRating: 0 });
  };

  ratingComment = setRating => {
    const rating = {
      0: '평가하기',
      0.5: '최악이에요',
      1: '싫어요',
      1.5: '별로예요',
      2: '재미없어요',
      2.5: '부족해요',
      3: '보통이에요',
      3.5: '볼만해요',
      4: '재밌어요',
      4.5: '훌륭해요!',
      5: '최고예요!',
    };

    return rating[setRating];
  };

  render() {
    const { setRating, setHoverRating } = this.state;

    return (
      <div className="info-act">
        <button className="act-button" onClick={this.onClickBtn}>
          <div className="button-contents">
            <span className="button-svg">
              <i className="fas fa-plus"></i>
            </span>
            <span className="button-text">보고싶어요</span>
          </div>
        </button>
        <div className="star-contents">
          <span>{this.ratingComment(setRating)}</span>
          <ul className="stars">
            {[1, 2, 3, 4, 5].map(index => {
              return (
                <>
                  <LeftStar
                    key={index.id}
                    index={index - 0.5}
                    onClick={this.onClick}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
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
                    onClick={this.onClick}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
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
