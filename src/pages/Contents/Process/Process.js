import React, { Component } from 'react';
import './Process.scss';

class Process extends Component {
  state = {
    processCount: 0,
  };

  plusMoveCount = () => {
    const { processCount } = this.state;
    const length = this.props.participants.length;
    const maxCount = Math.ceil(length / 6 - 1);
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
    const { participants } = this.props;
    const marginLeft = (processCount * -610).toString();
    const { minusMoveCount, plusMoveCount } = this;
    const length = participants && participants.length;
    const maxCount = Math.ceil(length / 6 - 1);

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
            {participants &&
              participants.map(part => {
                return (
                  <li className="producer">
                    <img
                      src={part.image}
                      className="producer-image"
                      alt="출연/제작자"
                    />
                    <div className="producer-info">
                      <p className="producer-name main-text">{part.name}</p>
                      <p className="producer-act sub-text">{part.role}</p>
                    </div>
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
    );
  }
}

export default Process;
