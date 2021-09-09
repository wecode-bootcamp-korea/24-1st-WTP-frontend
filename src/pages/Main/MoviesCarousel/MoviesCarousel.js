import React, { Component } from 'react';
import './MoviesCarousel.scss';

class MoviesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { carouselNumber: 0 };
  }

  plusCarouselNumber = () => {
    const { carouselNumber } = this.state;
    if (carouselNumber > 1) return;
    this.setState({
      carouselNumber: carouselNumber + 1,
    });
  };

  minusCarouselNumber = () => {
    const { carouselNumber } = this.state;
    if (!carouselNumber) return;
    this.setState({
      carouselNumber: carouselNumber - 1,
    });
  };

  render() {
    const marginTopValue = (this.state.carouselNumber * -800).toString();
    const { minusCarouselNumber, plusCarouselNumber } = this;
    const Carousel = CarouselData.map((Data, index) => {
      return (
        <div className="carousel-container" key={index}>
          <div className="carousel-content">
            <div className="arrow-left" onClick={minusCarouselNumber}>
              &#60;
            </div>
            <img className="carousel-poster" alt="poster" src={Data.src} />
            <span className="carousel-title">{Data.title}</span>
            <span className="carousel-desc">{Data.desc}</span>
            <div className="arrow-right" onClick={plusCarouselNumber}>
              &#62;
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="moviescarousel">
        <div
          className="movie-carousel"
          style={{ marginTop: `${marginTopValue}px` }}
        >
          {Carousel}
        </div>
      </div>
    );
  }
}

export default MoviesCarousel;

const CarouselData = [
  {
    title: '앗차 최고 인기작',
    desc: '유아인 • 유재명 주연의 소리도 없이',
    src: 'images/1.jpeg',
  },
  {
    title: '박스오피스 인기작',
    desc: '마블 스튜디오의 신작 샹치와 텐 링즈의 전설',
    src: 'images/2.jpeg',
  },
  {
    title: '9월 1주차 신작',
    desc: '성동일 • 김희원 주연의 담보',
    src: 'images/3.jpeg',
  },
];
