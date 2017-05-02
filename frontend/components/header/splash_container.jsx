import { connect } from 'react-redux';

import Splash from './splash';
import { logout, login } from '../../actions/session_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  bounds: state.bounds,
  restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
  fetchRestaurants: (query, location) => dispatch(fetchRestaurants(query, location)),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
