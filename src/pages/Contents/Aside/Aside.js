import React, { Component } from 'react';
import './Aside.scss';

class Aside extends Component {
  state = {
    processCount: 0,
  };

  plusMoveCount = () => {
    const { processCount } = this.state;
    const length = this.props.image.length;
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
    const { trailer, image } = this.props;
    const { minusMoveCount, plusMoveCount } = this;
    const thumnail = `https://img.youtube.com/vi/${trailer}/0.jpg`;
    const linkVideo = `https://www.youtube.com/watch?v=${trailer}`;
    const marginLeft = (processCount * -290).toString();
    const length = image && image.length;
    const maxCount = Math.ceil(length / 2 - 1);

    return (
      <div className="aside-all">
        <section className="gallery">
          <h2 className="title medium-title ">갤러리</h2>
          <div className="gallery-all">
            {!!processCount && (
              <div
                className="process-move-arrow left-arrow"
                onClick={minusMoveCount}
              >
                &#60;
              </div>
            )}
            <ul
              className="gallery-pictures"
              style={{ marginLeft: `${marginLeft}px` }}
            >
              {image &&
                image.map(image => {
                  return (
                    <li className="gallery-picture-sec" key={image.id}>
                      <img
                        src={image}
                        className="gallery-picture"
                        alt="갤러리 사진"
                      />
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
          </div>
        </section>
        <section className="gallery">
          <h2 className="title medium-title ">예고편</h2>
          <ul className="gallery-pictures">
            <li className="gallery-picture-sec">
              <a
                href={linkVideo}
                target="_blank"
                rel="noreferrer"
                className="for-hover"
              >
                <img
                  src={thumnail}
                  className="trailer-picture"
                  onMouseEnter={this.onMouseEnter}
                  alt="메인 예고편"
                />
                <i className="far fa-play-circle"></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Aside;
