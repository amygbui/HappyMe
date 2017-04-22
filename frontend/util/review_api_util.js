export const fetchReviews = restaurantId => {
  return $.ajax({
    method: 'GET',
    url: `api/restaurants/${restaurantId}/reviews`
  });
};

export const createReview = review => {
  return $.ajax({
    method: 'POST',
    url: "api/reviews",
    data: { review }
  })
}

// review = Review.create(
//   rating: 5,
//   review: "Great spot for groups!",
//   restaurant_id: 112,
//   author_id: 35
// )

export const updateReview = review => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
}
