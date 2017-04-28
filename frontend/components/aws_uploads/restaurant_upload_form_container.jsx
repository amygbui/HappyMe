import { connect } from 'react-redux';

import RestaurantUploadForm from './restaurant_upload_form';
import { updateRestaurant } from '../../util/restaurant_api_util';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => ({
  restaurant: state.restaurants[ownProps.params.restaurantId]
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantUploadForm);
