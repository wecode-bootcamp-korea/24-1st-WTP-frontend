import React, { Component } from 'react';
// import FooterList from './FooterList/FooterList';
import FooterData from './FooterData';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    const FooterList = FooterData.map((list, index) => {
      return (
        <div className={`footer-content${index}`}>
          <span className="right-bar right-bar-far">{list.title}</span>
          <span>{list.description}</span>
        </div>
      );
    });

    return (
      <div className="footer">
        <div className="footer-top-star-count-div">
          지금까지
          <span className="star-count"> ★ 626,921,264 개의 평가가 </span>
          쌓였어요.
        </div>
        <div className="footer-bottom-container">
          <div className="footer-bottom">
            <div className="footer-left">
              <div>
                <a href="!#" className="right-bar right-bar-far">
                  서비스 이용약관
                </a>
                <a href="!#" className="right-bar right-bar-far">
                  개인정보 처리방침
                </a>
                <a href="!#" className="right-bar-far">
                  회사 안내
                </a>
              </div>
              {FooterList}
              <div className="logo-div">
                <img
                  className="logo"
                  alt="atchapedia"
                  src="images/Atcha_Pedia_Logo_reversed.png"
                />
                © 2021 by ATCHA, Inc. All rights reserved.
              </div>
            </div>
            <div className="footer-right">
              <div className="select-language">한국어</div>
              <div className="footer-right-icons">
                <a href="!#">
                  <img alt="facebook" src="images/facebook.png" />
                </a>
                <a href="!#">
                  <img alt="twitter" src="images/twitter.png" />
                </a>
                <a href="!#">
                  <img alt="blogger" src="images/blogger.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
