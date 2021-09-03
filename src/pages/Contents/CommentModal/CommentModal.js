import React, { Component } from 'react';
import './CommentModal.scss';

class CommentModal extends Component {
  render() {
    const { open, close, addComment, mycomment, handleChange, movie_details } =
      this.props;

    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              <button className="close-modal" onClick={close}>
                &times;
              </button>
              <span>{movie_details.title}</span>
              <button
                className={mycomment !== '' ? 'add-comment comment' : 'comment'}
                disabled={mycomment !== '' ? '' : 'disabled'}
                onClick={() => addComment(mycomment)}
              >
                코멘트 작성
              </button>
            </header>
            <main>
              <textarea
                placeholder="이 작품에 대한 생각을 적어주세요."
                onChange={handleChange}
              ></textarea>
            </main>
          </section>
        ) : null}
      </div>
    );
  }
}

export default CommentModal;
