import { connect } from 'react-redux';

import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.params.restaurantId]
  }
};

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
