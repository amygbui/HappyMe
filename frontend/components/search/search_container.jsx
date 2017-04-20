import React from 'react';
import { connect } from 'react-redux';

import Search from './search';

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};

export default connect(null mapDispatchToProps)(Search);
