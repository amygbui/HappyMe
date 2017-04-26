import { merge } from 'lodash';
import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';

const RestaurantReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants
    case RECEIVE_RESTAURANT:
      // return merge({}, oldState, { [action.restaurant.id]: action.restaurant })
      return { [action.restaurant.id]: action.restaurant }
    default:
      return oldState;
  };
};

export default RestaurantReducer;
