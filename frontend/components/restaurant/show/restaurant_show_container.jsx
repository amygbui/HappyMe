import { connect } from 'react-redux';

import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../../../actions/restaurant_actions';
import { fetchReviews } from '../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.params.restaurantId],
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  fetchReviews: restaurantId => dispatch(fetchReviews(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
