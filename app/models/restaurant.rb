class Restaurant < ApplicationRecord
  include PgSearch

  pg_search_scope :search_restaurants, against: [:name, :description],
                  # associated_against: {
                  #   reviews: [:review]
                  #   hh_types: [:type]
                  # },
                  using: { tsearch: { prefix: true, dictionary: "english" } }

  validates :name, :address, :city, :state, :zip, :lat, :lng,
            :phone_number, :description, presence: true

  has_attached_file :image, default_url: "restaurant_avatar.ico"

  has_many :reviews,
    class_name: 'Review',
    primary_key: :id,
    foreign_key: :restaurant_id

  has_many :reviewers,
    through: :reviews,
    source: :reviewer

  # has_many :hh_types
  # has_many :prices, through: :reviews, source: :price (get average price from this?)
  # has_many :photos

  def average_rating
    return 0 if self.reviews.length == 0
    rating_sum = self.reviews.inject(0) { |sum, review| sum + review.rating }
    total_reviews = self.reviews.length
    ((rating_sum.to_f / total_reviews) * 2).round / 2.0
  end
end
