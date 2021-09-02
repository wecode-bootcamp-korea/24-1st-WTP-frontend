import React, { Component } from 'react';
import FooterContent from '../FooterContent/FooterContent';
import FooterData from './FooterData';

class FooterList extends Component {
  render() {
    return (
      <div>
        {FooterData.map((list, index) => {
          return (
            <FooterContent
              key={list.id}
              className={`footer-content${index}`}
              list={list}
            />
          );
        })}
      </div>
    );
  }
}

export default FooterList;
