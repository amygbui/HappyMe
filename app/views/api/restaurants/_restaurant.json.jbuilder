json.extract! restaurant, :id, :name, :address, :city, :state, :zip,
                          :phone_number, :lat, :lng, :description

json.image_url asset_path(restaurant.image.url(:original))
