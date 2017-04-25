json.extract! review, :id, :rating, :review, :author_id, :restaurant_id
json.reviewer do
  json.partial! "api/users/user", user: review.reviewer
end
