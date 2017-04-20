import React from 'react';
import { connect } from 'react-redux';

import RestaurantShow from './restaurant_show';

const mapStateToProps = (state, ownProps) => {
  // const restaurant =
  // restaurant = state.restaurant;
};

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
