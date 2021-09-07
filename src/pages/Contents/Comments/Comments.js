import React, { Component } from 'react';
import './Comments.scss';

class Comments extends Component {
  render() {
    const { comments } = this.props;

    return (
      <section className="comments">
        <header className="title">
          <h2 className="medium-title">코멘트</h2>
        </header>
        <ul>
          {comments &&
            comments.map(comments => {
              return (
                <li>
                  <div>
                    <div className="comment-title">
                      <h3>{comments.user_name}</h3>
                      <span>★{comments.user_rating}</span>
                    </div>
                  </div>
                  <span className="comment">{comments.comment}</span>
                  <span className="comment-good">
                    <i class="fas fa-thumbs-up"></i> 45
                  </span>
                </li>
              );
            })}
        </ul>
      </section>
    );
  }
}

export default Comments;
