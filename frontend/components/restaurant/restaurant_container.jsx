import React from 'react';
import { connect } from 'react-redux';

import RestaurantPreviewIndex from './restaurant_preview_index';

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

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPreviewIndex);
