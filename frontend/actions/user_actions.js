import * as UserApiUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = userId => dispatch => (
  UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
);