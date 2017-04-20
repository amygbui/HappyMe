import React from 'react';
import { connect } from 'react-redux';

import RestaurantIndex from './restaurant_index';

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
