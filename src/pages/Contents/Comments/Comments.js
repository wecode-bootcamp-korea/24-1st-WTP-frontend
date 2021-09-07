import React, { Component } from 'react';
import './Comments.scss';

class Comments extends Component {
  state = {
    processCount: 0,
  };

  plusMoveCount = () => {
    const { processCount } = this.state;
    const length = this.props.comments.length;
    const maxCount = Math.ceil(length / 2 - 1);
    if (!length || processCount === maxCount) return;
    this.setState({
      processCount: processCount + 1,
    });
  };

  minusMoveCount = () => {
    const { processCount } = this.state;
    if (!processCount) return;
    this.setState({
      processCount: processCount - 1,
    });
  };

  render() {
    const { processCount } = this.state;
    const { comments, onClick } = this.props;
    const marginLeft = (processCount * -610).toString();
    const { minusMoveCount, plusMoveCount } = this;
    const length = comments && comments.length;
    const maxCount = Math.ceil(length / 2 - 1);

    // console.log(this.props.comments[0].isLiked);

    console.log(this.props.comments.isLiked);

    // console.log(comments.length);
    // console.log(processCount);

    return (
      <section className="comments">
        <header className="title">
          <h2 className="medium-title">코멘트</h2>
        </header>

        {!!processCount && (
          <div
            className="process-move-arrow left-arrow"
            onClick={minusMoveCount}
          >
            &#60;
          </div>
        )}
        <ul style={{ marginLeft: `${marginLeft}px` }}>
          {comments &&
            comments.map(comments => {
              return (
                <li key={comments.id} comments={comments}>
                  <div>
                    <div className="comment-title">
                      <h3>{comments.user_name}</h3>
                      <span>★{comments.user_rating}</span>
                    </div>
                  </div>
                  <span className="comment">{comments.comment}</span>
                  <span className="comment-good">
                    <i
                      className={
                        comments.isLiked
                          ? 'fas fa-thumbs-up like'
                          : 'fas fa-thumbs-up'
                      }
                      comments={comments}
                      id={comments.user_name}
                      onClick={() => onClick(comments)}
                    ></i>
                    {comments.isLiked
                      ? comments.comment.length + 1
                      : comments.comment.length}
                  </span>
                </li>
              );
            })}
        </ul>
        {processCount <= maxCount - 1 && (
          <div
            className="process-move-arrow right-arrow"
            onClick={plusMoveCount}
          >
            &#62;
          </div>
        )}
      </section>
    );
  }
}

export default Comments;
