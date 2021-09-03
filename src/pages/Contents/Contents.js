import React, { Component } from 'react';
import MovieInfo from './MovieInfo/MovieInfo';
import BasicInfo from './BasicInfo/BasicInfo';
import Process from './Process/Process';
import SimilarThings from './SimilarThings/SimilarThings';
import Aside from './Aside/Aside';
import './Contents.scss';
import CommentModal from './CommentModal/CommentModal';

export default class Contents extends Component {
  state = {
    setRating: 0,
    setHoverRating: 0,
    isClicked: false,
    modalOpen: false,
    mycomment: '',
    isComment: false,
  };

  onClickBtn = () => {
    this.setState({ isClicked: !this.state.isClicked });
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

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  addComment = () => {
    this.setState({ modalOpen: false, isComment: true });
  };

  handleChange = e => {
    this.setState({ mycomment: e.target.value });
  };

  onDelete = () => {
    this.setState({ isComment: false, mycomment: '' });
  };

  render() {
    const {
      setRating,
      setHoverRating,
      isClicked,
      modalOpen,
      mycomment,
      isComment,
    } = this.state;

    console.log(this.state.mycomment);
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
            <div className="contents-align">
              <div className={isClicked ? 'comment-contents' : 'disppear'}>
                {isComment ? (
                  <div className="comment">
                    <span className="comment-text">김영현 : {mycomment}</span>
                    <div className="btns">
                      <button className="delete-btn" onClick={this.onDelete}>
                        <i class="fas fa-trash-alt"></i>삭제
                      </button>
                      <button className="change-btn" onClick={this.openModal}>
                        <i class="fas fa-pen"></i>수정
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="comment">
                    <span className="comment-text">
                      이 작품에 대한 김영현 님의 평가를 글로 남겨보세요.
                    </span>
                    <button className="comment-btn" onClick={this.openModal}>
                      코멘트 남기기
                    </button>
                  </div>
                )}
              </div>
              <CommentModal
                open={modalOpen}
                close={this.closeModal}
                mycomment={mycomment}
                addComment={this.addComment}
                handleChange={this.handleChange}
              />
              <div className="contents-all">
                <BasicInfo />
                <Process />
                <SimilarThings />
              </div>
            </div>
            <Aside />
          </div>
        </div>
      </div>
    );
  }
}
