import { connect } from 'react-redux';

import ReviewIndex from './review';
import { receiveReviews, receiveReview } from '../../actions/review_actions';

const mapStateToProps = state => ({
  reviews: state.reviews
})

const mapDispatchToProps = dispatch => ({
  receiveReviews: reviews => dispatch(receiveReviews),
  receiveReview: review => dispatch(receiveReview)
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
