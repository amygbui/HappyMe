json.partial! "api/users/user", user: @user
json.reviews @user.reviews do |review|
  json.partial! "api/reviews/review", review: review
end
