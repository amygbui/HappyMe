json.extract! user, :id, :name, :username
json.image_url asset_url(user.avatar.url(:original))
