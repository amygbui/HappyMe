import React from 'react';
import { connect } from 'react-redux';

import RestaurantPreviewIndex from './restaurant_preview_index.jsx';

const mapStateToProps = state => {
  return {
    // businesses: this.state.businesses
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPreviewIndex);
