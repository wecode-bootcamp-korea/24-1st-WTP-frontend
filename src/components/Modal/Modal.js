import React, { Component } from 'react';
import './Modal.scss';

export class Modal extends Component {
  render() {
    const { close } = this.props;

    return (
      <div className="openModal modal">
        <section>
          <button className="close" onClick={close}>
            &times;
          </button>
          <main>{this.props.children}</main>
        </section>
      </div>
    );
  }
}

export default Modal;
