import * as ReviewApiUtil from '../util/review_api_util';

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

export const fetchReviews = restaurantId => (
  ReviewApiUtil.fetchReviews(restaurantId)
    .then(reviews => dispatch(receiveReviews(reviews)))
);

export const createReview = review => (
  ReviewApiUtil.createReview(review)
    .then(newReview => dispatch(receiveReview(newReview)))
);

export const updateReview = review => (
  ReviewApiUtil.updateReview(review)
    .then(updatedReview => dispatch(receiveReview(updatedReview)))
);
