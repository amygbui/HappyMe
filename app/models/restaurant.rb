class Restaurant < ApplicationRecord
  include PgSearch

  pg_search_scope :search_restaurants, against: [:name, :description],
                  # associated_against: {
                  #   reviews: [:review]
                  #   hh_types: [:type]
                  # },
                  using: { tsearch: { prefix: true } }

  validates :name, :address, :city, :state, :zip, :lat, :lng,
            :phone_number, :description, presence: true

  has_attached_file :image, default_url: "restaurant_avatar.ico"
  # has_many :reviews
  # has_many :reviewers, through: reviews, source: :reviewer
  # has_many :hh_types
  # has_many :prices, through: :reviews, source: :price (get average price from this?)
  # has_many :photos
end
