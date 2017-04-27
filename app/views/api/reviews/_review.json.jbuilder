json.extract! review, :id, :rating, :review, :author_id, :restaurant_id
json.restaurant do
  json.partial! "api/restaurants/restaurant", restaurant: review.restaurant
end
json.reviewer do
  json.partial! "api/users/user", user: review.reviewer
end

json.date "#{review.updated_at.month}/#{review.updated_at.day}/#{review.updated_at.year}"
