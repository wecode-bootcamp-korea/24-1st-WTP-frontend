import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Signup from '../../components/Signup/Signup';
import Login from '../../components/Login/Login';
import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Signup />
        <Login />
      </div>
    );
  }
}
