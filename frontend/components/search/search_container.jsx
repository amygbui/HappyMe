import { connect } from 'react-redux';

import { fetchRestaurants } from '../../actions/restaurant_actions';
import { fetchBounds } from '../../actions/map_actions';
import Search from './search';

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    bounds: state.bounds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: (query, bounds) => dispatch(fetchRestaurants(query, bounds)),
    fetchBounds: location => dispatch(fetchBounds(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
