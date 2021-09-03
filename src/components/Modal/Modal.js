import React, { Component } from 'react';
import Signup from '../Signup/Signup';
// import Login from '../../../components/Login/Login';

export class Modal extends Component {
  render() {
    return (
      <div>
        <Signup />
        {/* <Login /> */}
      </div>
    );
  }
}

export default Modal;
