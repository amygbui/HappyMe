import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantReducer from './restaurant_reducer';
import ReviewReducer from './review_reducer';

export default combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer,
  reviews: ReviewReducer
});
