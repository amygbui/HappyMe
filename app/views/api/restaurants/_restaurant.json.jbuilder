json.extract! restaurant, :id, :name, :address, :city, :state, :zip,
                          :phone_number, :lat, :lng, :description,
                          :average_rating, :all_reviewers

json.image_url asset_path(restaurant.image.url(:small))
json.image_url_big asset_path(restaurant.image.url(:medium))
