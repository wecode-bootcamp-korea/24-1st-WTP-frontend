import React, { Component } from 'react';
import RatingStars from './RatingStars';
import './InfoAct.scss';

class InfoAct extends Component {
  state = {
    setRating: 0,
    setHoverRating: 0,
    comments: '',
  };

  onClick = () => {
    this.setState({ setRating: this.state.setHoverRating });
    console.log(this.state.setRating);
    // if (this.state.setRating === this.state.setRating) {
    //   this.setState({ setRating: 0 });
    // }
  };

  // onMouseEnter = index => {
  //   this.setState({ setHoverRating: index });
  //   if (this.state.setRating === index) {
  //     console.log('삭제하기');
  //   }
  // };

  onMouseEnter = e => {
    const starX = e.nativeEvent.offsetX;
    const starWidth = e.currentTarget.offsetWidth;
    let index = e.currentTarget.getAttribute('index');
    // let starRatingForPost;

    // console.log(starX);
    // console.log(starWidth);
    console.log(index);

    if (starWidth * 0.5 < starX) {
      // starRatingForPost = parseInt(index);
      this.setState({
        setHoverRating: parseInt(index),
      });
    }

    if (starX < starWidth * 0.5) {
      // starRatingForPost = parseInt(index) - 0.5;
      this.setState({
        setHoverRating: index - 0.5,
      });
    }
    console.log(this.state.setHoverRating);
    // return starRatingForPost;
  };

  onMouseLeave = () => {
    this.setState({ setHoverRating: 0 });
  };

  render() {
    // console.log(this.state.setHoverRating);

    return (
      <div className="info-act">
        <button className="act-button">
          <div className="button-contents">
            <span className="button-svg">
              <i className="fas fa-plus"></i>
            </span>
            <span className="button-text">보고싶어요</span>
          </div>
        </button>
        <div className="star-contents">
          <span>{this.state.setRating}</span>
          {/* {this.state.setRating === 0 && <span>평가하기</span>} */}
          {/* {this.state.setRating > 2 && this.state.setRating < 4 && (
            <span>보통이에요</span>
          )}
          {this.state.setRating < 5 && <span>훌륭해요</span>}
          {this.state.setRating === 5 && <span>최고예요!</span>} */}
          <ul className="stars">
            {[1, 2, 3, 4, 5].map(index => {
              return (
                <RatingStars
                  setRating={this.state.setRating}
                  rating={this.state.setHoverRating}
                  index={index}
                  onClick={this.onClick}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default InfoAct;
