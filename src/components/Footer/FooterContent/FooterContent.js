import React, { Component } from 'react';

class FooterContent extends Component {
  render() {
    const { className, list } = this.props;
    return (
      <div className={className}>
        <span className="right-bar right-bar-far">{list.title}</span>
        <span>{list.description}</span>
      </div>
    );
  }
}

export default FooterContent;
