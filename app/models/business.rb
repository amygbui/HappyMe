class Business < ApplicationRecord
  validates :name, :address, :city, :state, :zip, :lat, :lng,
            :phone_number, :description, :profile_pic_url

  # has_many :reviews
  # has_many :reviewers, through: reviews, source: :reviewer
  # has_many :hh_types
  # has_many :prices, through: :reviews, source: :price (get average price from this?)
  # has_many :photos
end
