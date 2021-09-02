import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Signup from '../../components/Signup/Signup';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <img src="/images/switzerland.jpeg" alt="swiss" />
        <Signup />
      </div>
    );
  }
}
