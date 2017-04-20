import React from 'react';
import { connect } from 'react-redux';

import { fetchRestaurants } from '../../util/search_api_util'
import Search from './search';

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};

export default connect(null, mapDispatchToProps)(Search);
