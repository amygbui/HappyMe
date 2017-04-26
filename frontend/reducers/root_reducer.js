import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantReducer from './restaurant_reducer';
import ReviewReducer from './review_reducer';
import MapReducer from './map_reducer';

export default combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer,
  reviews: ReviewReducer,
  bounds: MapReducer
});
