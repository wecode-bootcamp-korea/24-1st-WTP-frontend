import React, { Component } from 'react';
import MovieInfo from './MovieInfo/MovieInfo';
import BasicInfo from './BasicInfo/BasicInfo';
import Process from './Process/Process';
import SimilarThings from './SimilarThings/SimilarThings';
import Aside from './Aside/Aside';
import './Contents.scss';

export default class Contents extends Component {
  state = {
    setRating: 0,
    setHoverRating: 0,
    isClicked: false,
  };

  onClickBtn = () => {
    this.setState({ isClicked: !this.state.isClicked });
    // console.log(this.state.isClicked);
  };

  onClick = index => {
    this.setState({ setRating: index });
    console.log(index);
    console.log(this.state.setRating);
    if (this.state.setRating === index) {
      this.setState({ setRating: 0 });
    }
  };

  onMouseEnter = index => {
    this.setState({ setHoverRating: index });
    // console.log(index);
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
    const { setRating, setHoverRating, isClicked } = this.state;
    return (
      <div className="contents">
        <div className="background">
          <section className="background">
            <div className="background-gradient"></div>
            <img
              src="/images/a4d2dd681002aaf17c39edfb948a217d.jpeg"
              className="background-image"
              alt="메인 이미지"
            />
          </section>
        </div>
        <div className="main">
          <MovieInfo
            onClickBtn={this.onClickBtn}
            onClick={this.onClick}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            ratingComment={this.ratingComment}
            setRating={setRating}
            setHoverRating={setHoverRating}
            isClicked={isClicked}
          />
          <div className="main-contents">
            <div className="contents-all">
              <BasicInfo />
              <Process />
              <SimilarThings />
            </div>
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}
