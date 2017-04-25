import { connect } from 'react-redux';

import { fetchRestaurants } from '../../actions/restaurant_actions';
import Search from './search';

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: query => dispatch(fetchRestaurants(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
