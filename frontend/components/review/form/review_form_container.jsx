import { connect } from 'react-redux';

import ReviewForm from './review_form';
import { createReview, updateReview } from '../../../util/review_api_util';
import { fetchRestaurant } from '../../../actions/restaurant_actions';


const mapStateToProps = (state, ownProps) => {
  // review:
  return {
    restaurant: state.restaurants[ownProps.params.restaurantId]
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createReview: review => dispatch(createReview(review)),
  fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
