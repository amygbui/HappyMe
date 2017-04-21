import React from 'react';
import { connect } from 'react-redux';

import { receiveErrors, login, signup } from '../../actions/session_actions';
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.location.pathname === '/login' ? login : signup;

  return {
    processForm: user => dispatch(action(user)),
    guestDemo: user => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
