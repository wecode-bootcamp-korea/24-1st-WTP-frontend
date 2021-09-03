import React, { Component } from 'react';
import './ProfileModal.scss';

class ProfileModal extends Component {
  render() {
    const { click } = this.props;
    return (
      <div className="modal" onClick={click}>
        <div className="modal-container" onClick={e => e.stopPropagation()}>
          <div className="margin-left modal-close" onClick={click}>
            X
          </div>
          <div className="settings">설정</div>
          <div className="settings-detail">마케팅 정보</div>
          <div className="settings-detail">공개 설정</div>
          <div className="margin-left light-font">친구 설정</div>
          <div className="settings-detail">페이스북 친구 추가</div>
          <div className="margin-left light-font">서비스 설정</div>
          <div className="settings-detail service-settings">
            <span>언어</span>
            <span className="light-font">한국어</span>
          </div>
          <div className="settings-detail service-settings">
            <span>국가 및 지역</span>
            <span className="light-font">대한민국</span>
          </div>
          <div className="margin-left light-font">고객센터</div>
          <div className="settings-detail">문의하기 / FAQ</div>
          <div className="settings-detail">DB 수정/추가 요청하기</div>
          <div className="settings-detail">공지사항</div>
          <div className="settings-detail">로그아웃</div>
          <div className="settings-detail">탈퇴하기</div>
        </div>
      </div>
    );
  }
}

export default ProfileModal;
