import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';

const _defaultState = { currentUser: null, errors: [] }

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, { [action.user.id]: action.user })
    default:
      return oldState
  }
}

export default UserReducer;
