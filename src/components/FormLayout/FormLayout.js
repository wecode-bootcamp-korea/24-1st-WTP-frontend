import React, { Component } from 'react';

export class FormLayout extends Component {
  render() {
    return (
      <div className="container">
        <header className="logo">
          <img
            src="/images/AtchaPedia_Logo_Big.png"
            alt="atcha"
            className="logo"
          />
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default FormLayout;
