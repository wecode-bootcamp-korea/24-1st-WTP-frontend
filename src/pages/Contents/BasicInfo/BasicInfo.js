import React, { Component } from 'react';
import './BasicInfo.scss';

class BasicInfo extends Component {
  wrapRef = React.createRef();

  onClickMore = e => {
    this.wrapRef.current.classList.add('show');
    e.currentTarget.classList.add('hide');
  };

  render() {
    return (
      <section className="basic-info">
        <header className="title">
          <h2 className="medium-title">기본 정보</h2>
        </header>
        <article className="info-summary">
          <p className="little-summary">
            Shang-Chi and the Legend of the Ten Rings
          </p>
          <p className="little-summary">2021 · 미국 · 액션</p>
          <p className="little-summary">2시간 12분 · 12세</p>
          <ellipse ref={this.wrapRef} className="story-summary">
            `텐 링즈`를 차지하는 자, 세상을 지배한다! 초인적인 능력을 가진 텐
            링즈의 힘으로 수세기 동안 어둠의 세상을 지배해 온 `웬우`. `샹치`는
            아버지 웬우 밑에서 암살자로 훈련을 받았지만 이를 거부하고 평범함
            삶을 선택한다. 그러나 샹치는 목숨을 노리는 자들의 습격으로 더 이상
            운명을 피할 수 없다는 것을 직감하고, 어머니가 남긴 가족의 비밀과
            내면의 신비한 힘을 일깨우게 된다. 벗어나고 싶은 과거이자, 그
            누구보다 두려운 아버지 웬우를 마주해야 하는 샹치. 악이 될 것인가?
            구원이 될 것인가? 마블의 새로운 시대, 세상에 없던 힘이 탄생한다!
          </ellipse>
          <button onClick={this.onClickMore}>...더보기</button>
        </article>
      </section>
    );
  }
}

export default BasicInfo;
