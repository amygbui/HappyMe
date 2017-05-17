import { merge } from 'lodash';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_ERRORS } from '../actions/session_actions';

const _defaultState = { errors: [] }

const ReviewReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, oldState, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, oldState, { [action.review.id]: action.review }, { errors: {} });
    case RECEIVE_ERRORS:
      return Object.assign({}, oldState, { errors: action.errors });
    default:
      return oldState;
  };
};

export default ReviewReducer;
