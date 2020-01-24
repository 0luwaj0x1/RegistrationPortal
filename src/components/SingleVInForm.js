import React from 'react';
import {connect} from "react-redux";
import { Field, reduxForm } from "redux-form";
import { compose } from 'redux';
import {checkVin} from "../actions";



class SingleVinForm extends React.Component {

    onSubmit = (formValues) => {
        this.props.checkVin(formValues);
        this.props.reset();
    };

    renderError(touched, error) {
      if(touched) {
        return (
            <p>{error}</p>
        );
      }
    }

    renderInput = ({input, meta: { error, touched}}) => {
      return (
          <>
            <input {...input} type="text" placeholder="Enter a Vin" className="form__input" />
            { this.renderError(touched, error) }
          </>
      );
    };

    render() {
      const {  handleSubmit, pristine, submitting, invalid } = this.props;
      return (
          <div className="single-vin__form">
            <form action="#" className="form" onSubmit={handleSubmit(this.onSubmit)}>
              <div className="form__group">
                <label htmlFor="single" className="form__label">Enter a VIN Number</label>
                <div className="single-div">
                  <Field name="vin_no" component={this.renderInput} />
                  <button type="submit" disabled={invalid || pristine || submitting}  className="btn btn-standard">Search</button>
                </div>
              </div>
            </form>
          </div>
      )
    }
  }
  const validate = (formValues) => {
    const errors = {};
    if(!formValues.vin_no) {
      errors.vin_no = 'You Must enter a vin number';
    }
    if(formValues.vin_no && (formValues.vin_no.length < 16 )) {
      errors.vin_no = 'Vin number must be 16 digit';
    }
    return errors;
  };


  export default compose(
      connect(null, { checkVin }),
      reduxForm({ form: 'check-vin', validate})
  )(SingleVinForm)



