import React from 'react';
import ReactDOM from 'react-dom';


class Modal extends React.Component {


  render() {
    return ReactDOM.createPortal(
      <div className="modal">
            <div className="modal__container">
              <div className="modal__content">
                <span onClick={ this.props.close }>&times;</span>
                {this.props.children}
              </div>
            </div>
          </div>,
      document.querySelector('#modal')
    )
  }
  
};

export default Modal;