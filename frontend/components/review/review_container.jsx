import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { fetchReviews, fetchReview } from '../../actions/review_actions';

const mapStateToProps = state => ({
  reviews: state.reviews
})

const mapDispatchToProps = dispatch => ({
  fetchReviews: reviews => dispatch(fetchReviews(reviews)),
  fetchReview: review => dispatch(fetchReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
