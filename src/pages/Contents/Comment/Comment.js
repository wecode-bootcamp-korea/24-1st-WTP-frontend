import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <span className="comment-text">
          이 작품에 대한 김영현 님의 평가를 글로 남겨보세요.
        </span>
        <button className="comment-btn">코멘트 남기기</button>
      </div>
    );
  }
}

export default Comment;
