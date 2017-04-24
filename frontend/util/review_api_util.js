export const fetchReviews = restaurantId => {
  return $.ajax({
    method: 'GET',
    url: `api/restaurants/${restaurantId}/reviews`
  });
};

export const fetchReview = reviewId => {
  return $.ajax({
    method: 'GET',
    url: `api/reviews/${reviewId}`
  })
}

export const createReview = review => {
  return $.ajax({
    method: 'POST',
    url: "api/reviews",
    data: { review }
  })
}

export const updateReview = review => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
}
