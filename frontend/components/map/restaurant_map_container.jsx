import { connect } from 'react-redux';

import RestaurantMap from './restaurant_map';
import { fetchRestaurants, fetchRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  bounds: state.bounds
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: (query, bounds) => dispatch(fetchRestaurants(query, bounds)),
  fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMap);
