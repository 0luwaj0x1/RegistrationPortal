import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import SingleVinForm from '../SingleVInForm';
import Loading from '../Loading';




class VinRegistration extends React.Component {

state = {
  showModal: false
};

closeModal = () => {
  this.setState({showModal: false});
};

renderModal() {
  if(this.state.showModal) {
    return (
      <Modal close={this.closeModal}>
        <SingleVinForm />
      </Modal>
    )
  }else {
    return false
  }
}



  render () {
        return (
          <div>
              <div className="header">
                  <img src="/img/vreg-logo.svg" alt="" className="logo" />
                
                  <nav className="user-nav">
                      <ul className="user-nav__box">
                        <li className="user-nav__item user-nav__item--active">VIN Registration</li>
                        <li className="user-nav__item">VIN Transfer</li>
                        <li className="user-nav__item">VIN Transfer Activation</li>
                        <li className="user-nav__item">VIN Verification</li>
                      </ul>
                      <div className="user-nav__menu">
                        <img src="/img/menu.svg" className="menu" alt="" />
                      </div>
                  </nav>
              </div>
              <div className="content">
                <div className="vin-reg">
                  <div className="vin-reg__text">
                    <h4>Upload excel file containing multiple VIN</h4>
                    <p>Download sample excel file</p>
                  </div>
                  <div className="vin-reg__upload-bulk">
                    <img src="/img/bulk-upload.svg" alt="bulk upload" />
                    <p>Drag and drop to upload excel</p>
                    <a href="#">or browse to here</a>
                  </div>
                  <div className="vin-reg__divider">
                    OR
                  </div>

                  <div className="vin-reg__upload-single">
                    <img src="/img/plus.svg" alt="add vin" />
                    <a href="#" onClick={() => {this.setState({showModal: true})}}>Add a Single VIN</a>
                  </div>
                </div>
              </div>
              {this.renderModal()}
              { this.props.loading && <Loading />}
          </div>
      );
  }

};
const mapStateToProps = (state) => ({
    loading: state.loading
});
export default connect(mapStateToProps)(VinRegistration);
