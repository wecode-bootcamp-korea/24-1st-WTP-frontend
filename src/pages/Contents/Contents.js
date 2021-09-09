import React, { Component } from 'react';
import { GET_MOVIES_BASIC } from '../../config';
import { GET_MOVIES_GENRE } from '../../config';
import MovieInfo from './MovieInfo/MovieInfo';
import CommentModal from './CommentModal/CommentModal';
import BasicInfo from './BasicInfo/BasicInfo';
import Process from './Process/Process';
import SimilarThings from './SimilarThings/SimilarThings';
import Aside from './Aside/Aside';
import Comments from './Comments/Comments';
import { ReactComponent as OneStar } from '../../assets/icons/pointed-star.svg';
import './Contents.scss';

export default class Contents extends Component {
  state = {
    movie_details: [],
    related_movies: [],
    comments: [],
    setRating: 0,
    setHoverRating: 0,
    clickBtn: false,
    modalOpen: false,
    mycomment: '',
    isComment: false,
    goLogin: false,
  };

  componentDidMount() {
    console.log(12);
    this.getData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo(0, 0);
      this.getData();
      this.setState({
        mycomment: this.state.mycomment,
        clickBtn: false,
        isComment: false,
      });

      // .then(window.scrollTo(0, 0));

      // if (prevProps.mycomment !== this.state.mycomment) {
      //   fetch(
      //     `http://10.58.0.58:8000/movies/${this.props.match.params.id}/comments`
      //   )
      //     .then(res => res.json())
      //     .then(res =>
      //       this.setState({
      //         comments: res.MESSAGE,
      //       })
      //     );
      // }
    }
  }

  //getData 함수를 통한 DidMount,DidUpdate 접근
  getData = () => {
    fetch(`${GET_MOVIES_GENRE}${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          related_movies: res.related_movies,
        })
      );

    //로그인을 해서 토큰이 있을 시 setRating에 별점 등록
    if (localStorage.getItem('login-token')) {
      fetch(`${GET_MOVIES_BASIC}${this.props.match.params.id}/user-rate`, {
        headers: {
          authorization: localStorage.getItem('login-token'),
        },
      })
        .then(res => res.json())
        .then(res =>
          this.setState({
            setRating: res.user_rate,
          })
        );
      fetch(`${GET_MOVIES_BASIC}${this.props.match.params.id}`)
        .then(res => res.json())
        .then(res =>
          this.setState({
            movie_details: res.movie_info,
          })
        );
      //로그인이 안되어있으면 setRating:0
    } else {
      fetch(`${GET_MOVIES_BASIC}${this.props.match.params.id}`)
        .then(res => res.json())
        .then(res =>
          this.setState({
            movie_details: res.movie_info,
          })
        );
    }

    fetch(`${GET_MOVIES_BASIC}${this.props.match.params.id}/comments`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          comments: res.MESSAGE,
        })
      );
  };

  //보고싶어요 버튼 클릭 이벤트
  onClickBtn = () => {
    this.setState({
      clickBtn: !this.state.clickBtn,
    });
  };

  //별점 클릭 이벤트
  onClick = index => {
    if (localStorage.getItem('login-token')) {
      fetch(`${GET_MOVIES_BASIC}${this.props.match.params.id}/user-rate`, {
        method: 'POST',
        headers: {
          authorization: localStorage.getItem('login-token'), // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjJ9.mXKzpLEKc5mJTCU6dPE60LQiaz0ZLo7pAyQ4zI25fgw',
        },
        body: JSON.stringify({ rate: index }),
      })
        .then(response => response.json())
        .then(
          this.setState({
            setRating: index.toFixed(1),
          })
        )
        .then(
          this.state.setRating === index.toFixed(1) &&
            this.setState({ setRating: 0, mycomment: '', isComment: false })
        );
    } else {
      this.setState({ goLogin: !this.state.goLogin });
    }
  };

  //별점 마우스 엔터 이벤트
  onMouseEnter = index => {
    this.setState({ setHoverRating: index });
    console.log(this.state.setHoverRating);
  };

  //별점 마우스 리브 이벤트
  onMouseLeave = () => {
    this.setState({ setHoverRating: 0 });
  };

  ratingComment = setRating => {
    const rating = {
      0: '평가하기',
      0.5: '최악이에요',
      '1.0': '싫어요',
      1.5: '별로예요',
      '2.0': '재미없어요',
      2.5: '부족해요',
      '3.0': '보통이에요',
      3.5: '볼만해요',
      '4.0': '재밌어요',
      4.5: '훌륭해요!',
      '5.0': '최고예요!',
    };

    return rating[setRating];
  };

  openModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, goLogin: false });
  };

  //코멘트 작성 버튼 클릭 이벤트
  addComment = mycomment => {
    fetch(
      `http://10.58.2.252:8000/movies/${this.props.match.params.id}/comments`,
      {
        method: 'POST',
        headers: {
          authorization: localStorage.getItem('login-token'),
        },
        body: JSON.stringify({ comment: mycomment }),
      }
    )
      .then(response => response.json())
      .then(this.setState({ modalOpen: false, isComment: true }));
  };

  handleChange = e => {
    this.setState({ mycomment: e.target.value });
  };

  onDelete = () => {
    this.setState({ isComment: false, mycomment: '' });
  };

  //코멘트 별 좋아요 클릭 이벤트
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
      clickBtn,
      modalOpen,
      mycomment,
      isComment,
      movie_details,
      comments,
      related_movies,
      goLogin,
    } = this.state;

    const { image_url, title, trailer, participants } = movie_details;

    return (
      <div className="contents">
        <div className="background">
          <section className="background">
            {/* <div className="background-gradient"></div> */}
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
            clickBtn={clickBtn}
            movie_details={movie_details}
          />
          <div className="main-contents">
            <div className="contents-align">
              <div
                className={setRating !== 0 ? 'comment-contents' : 'disppear'}
              >
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
              {goLogin && (
                <div className="modal">
                  <section>
                    <button className="close-modal" onClick={this.closeModal}>
                      &times;
                    </button>
                    <article>
                      {[1, 2, 3, 4, 5].map(index => {
                        return (
                          <>
                            <OneStar
                              key={index.id}
                              fill={'#FEDD63'}
                              className="onestar"
                            />
                          </>
                        );
                      })}
                      <p>평가하시려면 로그인이 필요해요.</p>
                      <p>
                        <span>회원가입 또는 로그인</span>
                        하고 별점을 기록해보세요.
                      </p>
                    </article>
                  </section>
                </div>
              )}

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
                <Process participants={participants} />
                <Comments comments={comments} onClick={this.onLikeClick} />
                <SimilarThings related_movies={related_movies} />
              </div>
            </div>
            <Aside trailer={trailer} image={image_url} />
          </div>
        </div>
      </div>
    );
  }
}
