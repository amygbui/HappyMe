import { connect } from 'react-redux';

import ReviewForm from './review_form';
import { createReview, updateReview, fetchReviews } from '../../../actions/review_actions';
import { fetchRestaurant } from '../../../actions/restaurant_actions';


const mapStateToProps = (state, ownProps) => {
  const path = ownProps.route.path;
  const formType = path.slice(path.length - 3) === "new" ? "new" : "update";

  return {
    restaurant: state.restaurants[ownProps.params.restaurantId],
    reviews: state.reviews,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const path = ownProps.route.path;
  const action = path.slice(path.length - 3) === "new" ? createReview : updateReview;

  return {
    processForm: review => dispatch(action(review)),
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    fetchReviews: restaurantId => dispatch(fetchReviews(restaurantId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
