import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const _defaultState = { currentUser: null, errors: {} }

const SessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser, errors: {} };
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors })
      // return merge({}, oldState, { errors: action.errors });
      // can use default state instead of old state
    default:
      return oldState;
  }
};

export default SessionReducer;
