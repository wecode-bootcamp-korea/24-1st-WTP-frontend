import React, { Component } from 'react';
import './Process.scss';

class Process extends Component {
  state = {
    processCount: 0,
  };

  plusMoveCount = () => {
    const { processCount } = this.state;
    const length = 6;
    const maxCount = Math.ceil(length / 3 - 1);
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
    const marginLeft = (processCount * -638).toString();
    const { minusMoveCount, plusMoveCount } = this;
    // const { length } = this.props.data;
    const length = 6;
    const maxCount = Math.ceil(length / 5 - 1);

    return (
      <section className="process">
        <h2 className="title medium-title">출연/제작</h2>
        <div className="process-all">
          {!!processCount && (
            <div
              className="process-move-arrow left-arrow"
              onClick={minusMoveCount}
            >
              &#60;
            </div>
          )}
          <ul
            className="producers-all"
            style={{ marginLeft: `${marginLeft}px` }}
          >
            <li className="producer">
              <img
                src="/images/3f2c70fa235fcd74e64cacf38230e85d.jpeg"
                className="producer-image"
                alt="출연/제작자"
              />
              <div className="producer-info">
                <p className="producer-name main-text">양조위</p>
                <p className="producer-act sub-text">조연 | 웬우</p>
              </div>
            </li>
            <li className="producer">
              <img
                src="/images/3f2c70fa235fcd74e64cacf38230e85d.jpeg"
                className="producer-image"
                alt="출연/제작자"
              />
              <div className="producer-info">
                <p className="producer-name main-text">양조위</p>
                <p className="producer-act sub-text">조연 | 웬우</p>
              </div>
            </li>
            <li className="producer">
              <img
                src="/images/3f2c70fa235fcd74e64cacf38230e85d.jpeg"
                className="producer-image"
                alt="출연/제작자"
              />
              <div className="producer-info">
                <p className="producer-name main-text">양조위</p>
                <p className="producer-act sub-text">조연 | 웬우</p>
              </div>
            </li>
            <li className="producer">
              <img
                src="/images/3f2c70fa235fcd74e64cacf38230e85d.jpeg"
                className="producer-image"
                alt="출연/제작자"
              />
              <div className="producer-info">
                <p className="producer-name main-text">양조위</p>
                <p className="producer-act sub-text">조연 | 웬우</p>
              </div>
            </li>
            <li className="producer">
              <img
                src="/images/3f2c70fa235fcd74e64cacf38230e85d.jpeg"
                className="producer-image"
                alt="출연/제작자"
              />
              <div className="producer-info">
                <p className="producer-name main-text">양조위</p>
                <p className="producer-act sub-text">조연 | 웬우</p>
              </div>
            </li>
            <li className="producer">
              <img
                src="/images/3f2c70fa235fcd74e64cacf38230e85d.jpeg"
                className="producer-image"
                alt="출연/제작자"
              />
              <div className="producer-info">
                <p className="producer-name main-text">양조위</p>
                <p className="producer-act sub-text">조연 | 웬우</p>
              </div>
            </li>
            <li className="producer">
              <img
                src="/images/3f2c70fa235fcd74e64cacf38230e85d.jpeg"
                className="producer-image"
                alt="출연/제작자"
              />
              <div className="producer-info">
                <p className="producer-name main-text">양조위</p>
                <p className="producer-act sub-text">조연 | 웬우</p>
              </div>
            </li>
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
    );
  }
}

export default Process;
