import { connect } from 'react-redux';

import RestaurantIndex from './restaurant_index';

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
