import React, { Component } from 'react';
import './Modal.scss';

export class Modal extends Component {
  render() {
    const { open, close } = this.props;

    return (
      <div className={open ? 'openModal modal' : 'modal'}>
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
