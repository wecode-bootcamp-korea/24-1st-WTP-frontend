import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Login from '../../components/Login/Login';
import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Login />
      </div>
    );
  }
}
