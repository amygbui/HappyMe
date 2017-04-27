json.extract! user, :id, :name, :username, :session_token, :reviews, :reviewed_restaurants
json.image_url asset_path(user.avatar.url(:original))
