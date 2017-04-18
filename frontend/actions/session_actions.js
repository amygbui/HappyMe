import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)));
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)));
};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
