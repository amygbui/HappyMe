import { connect } from 'react-redux';

import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    bounds: state.bounds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchRestaurants: (query, location) => dispatch(fetchRestaurants(query, location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
