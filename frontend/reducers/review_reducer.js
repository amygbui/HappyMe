import merge from 'lodash';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/restaurant_actions';

const RestaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews
    case RECEIVE_REVIEW:
      return merge({}, oldState, { [action.review.id]: action.review })
    default:
      return oldState;
  };
};

export default ReviewReducer;
