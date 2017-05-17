import * as ReviewApiUtil from '../util/review_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const fetchReviews = restaurantId => dispatch => (
  ReviewApiUtil.fetchReviews(restaurantId)
    .then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = reviewId => dispatch => (
  ReviewApiUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => (
  ReviewApiUtil.createReview(review)
    .then(newReview => dispatch(receiveReview(newReview)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateReview = review => dispatch => (
  ReviewApiUtil.updateReview(review)
    .then(updatedReview => dispatch(receiveReview(updatedReview)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
