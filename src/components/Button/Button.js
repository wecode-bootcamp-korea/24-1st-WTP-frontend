import React, { Component } from 'react';
import './Button.scss';

export class Button extends Component {
  render() {
    return <div className="btn">{this.props.value}</div>;
  }
}

export default Button;
