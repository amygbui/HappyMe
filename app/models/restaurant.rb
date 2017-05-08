class Restaurant < ApplicationRecord
  include PgSearch

  pg_search_scope :search_restaurants, against: [:name, :description],
                  using: { tsearch: { prefix: true,
                                      any_word: true,
                                      dictionary: "english" } }

  validates :name, :address, :city, :state, :zip, :lat, :lng,
            :phone_number, :description, presence: true

  has_attached_file :image, default_url: "restaurant_avatar.ico",
    styles: {
      thumb: "37x37#",
      small: "60x60>",
      medium: "250x250"
    }

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :reviews,
    class_name: 'Review',
    primary_key: :id,
    foreign_key: :restaurant_id

  has_many :reviewers,
    through: :reviews,
    source: :reviewer

  def self.in_bounds(bounds)
    Restaurant.where("lat > ?", bounds[:southwest][:lat])
              .where("lat < ?", bounds[:northeast][:lat])
              .where("lng > ?", bounds[:southwest][:lng])
              .where("lng < ?", bounds[:northeast][:lng])
  end

  def average_rating
    ((reviews.average(:rating).to_s.to_f) * 2).round / 2.0
  end

  def all_reviewers
    reviewers.map(&:username)
  end
end
