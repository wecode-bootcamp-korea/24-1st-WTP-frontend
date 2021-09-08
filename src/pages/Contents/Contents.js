import React, { Component } from 'react';
import { GET_MOVIES_BASIC } from '../../config';
import { GET_MOVIES_GENRE } from '../../config';
import { GET_MOVIES_COMMENTS } from '../../config';
import MovieInfo from './MovieInfo/MovieInfo';
import CommentModal from './CommentModal/CommentModal';
import BasicInfo from './BasicInfo/BasicInfo';
import Process from './Process/Process';
import SimilarThings from './SimilarThings/SimilarThings';
import Aside from './Aside/Aside';
import './Contents.scss';
import Comments from './Comments/Comments';

export default class Contents extends Component {
  state = {
    movie_details: [],
    related_movies: [],
    comments: [],
    setRating: 0,
    setHoverRating: 0,
    isClicked: false,
    clickBtn: false,
    modalOpen: false,
    mycomment: '',
    isComment: false,
  };

  componentDidMount() {
    fetch(`${GET_MOVIES_COMMENTS}`)
      .then(res => res.json())
      .then(data => {
        const newMessage = data.MESSAGE.map(item => {
          item.isLiked = false;
          return item;
        });
        this.setState({ comments: newMessage });
      });

    fetch(`${GET_MOVIES_BASIC}${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          movie_details: res.movie_info,
        })
      );

    fetch(`${GET_MOVIES_GENRE}${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          related_movies: res.related_movies,
        })
      );
  }

  onClickBtn = () => {
    this.setState({
      isClicked: !this.state.isClicked,
      clickBtn: !this.state.clickBtn,
    });
  };

  onClick = index => {
    fetch('http://10.58.4.196:8000/details/rate/2', {
      method: 'POST',
      headers: {
        authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.WQDe7Cg7P7pDNjqT_G6LHLO6zsVpkJvCbqdeSJM5jws',
      },
      body: JSON.stringify({ rate: index }),
    })
      .then(response => response.json())
      .then(this.setState({ setRating: index }))
      .then(this.state.setRating === index && this.setState({ setRating: 0 }));
  };

  onMouseEnter = index => {
    this.setState({ setHoverRating: index });
    console.log(this.state.setHoverRating);
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
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  addComment = mycomment => {
    this.setState({ modalOpen: false, isComment: true });
    fetch(
      `http://10.58.0.58:8000/movies/${this.props.match.params.id}/comments`,
      {
        method: 'POST',
        headers: {
          authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.W9-3lURyw0K9piGHr-L-Kdfc6UkMpSwwYeV9iggRQTs',
        },
        body: JSON.stringify({ comment: mycomment }),
      }
    ).then(response => response.json());
  };

  handleChange = e => {
    this.setState({ mycomment: e.target.value });
  };

  onDelete = () => {
    this.setState({ isComment: false, mycomment: '' });
  };

  onLikeClick = comments => {
    const isLiked = this.state.comments.map(message => {
      if (comments.user_name === message.user_name) {
        console.log(!message.isLiked);
        return { ...message, isLiked: !message.isLiked };
      } else {
        return message;
      }
    });
    this.setState({ comments: isLiked });
  };

  render() {
    const {
      setRating,
      setHoverRating,
      isClicked,
      clickBtn,
      modalOpen,
      mycomment,
      isComment,
      movie_details,
      comments,
      related_movies,
    } = this.state;

    const { image_url, title } = movie_details;

    return (
      <div className="contents">
        <div className="background">
          <section className="background">
            <div className="background-gradient"></div>
            <img
              src={image_url && image_url[0]}
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
            clickBtn={clickBtn}
            movie_details={movie_details}
          />
          <div className="main-contents">
            <div className="contents-align">
              <div className={isClicked ? 'comment-contents' : 'disppear'}>
                {isComment ? (
                  <>
                    <header className="title">
                      <h2 className="medium-title">나의 댓글</h2>
                    </header>
                    <div className="comment">
                      <span className="comment-text">{mycomment}</span>
                      <div className="btns">
                        <button className="delete-btn" onClick={this.onDelete}>
                          <i class="fas fa-trash-alt"></i>삭제
                        </button>
                        <button className="change-btn" onClick={this.openModal}>
                          <i class="fas fa-pen"></i>수정
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="comment">
                    <span className="comment-text">
                      영화<span> {title}</span>에 대한 평가를 글로 남겨보세요.
                    </span>
                    <button className="comment-btn" onClick={this.openModal}>
                      코멘트 남기기
                    </button>
                  </div>
                )}
              </div>
              {modalOpen && (
                <CommentModal
                  close={this.closeModal}
                  mycomment={mycomment}
                  addComment={this.addComment}
                  handleChange={this.handleChange}
                  movie_details={movie_details}
                />
              )}
              <div className="contents-all">
                <BasicInfo movie_details={movie_details} />
                <Process participants={movie_details.participants} />
                <Comments comments={comments} onClick={this.onLikeClick} />
                <SimilarThings related_movies={related_movies} />
              </div>
            </div>
            <Aside
              trailer={movie_details.trailer}
              image={movie_details.image_url}
            />
          </div>
        </div>
      </div>
    );
  }
}
