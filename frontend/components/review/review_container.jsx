import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { fetchReviews, fetchReview } from '../../actions/review_actions';
import { receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  reviews: state.reviews,
  restaurantId: ownProps.restaurantId,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  fetchReviews: reviews => dispatch(fetchReviews(reviews)),
  fetchReview: review => dispatch(fetchReview(review)),
  clearErrors: () => dispatch(receiveErrors([]))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
