class Restaurant < ApplicationRecord
  # attr_reader :name, :description

  include PgSearch

  # PgSearch.multisearch_options = {
  #   :using => [:tsearch, :trigram]
  #   :ignoring => :accents
  # }

  # PgSearch.multisearch_options = {
  #   using: {
  #     tsearch: { prefix: true, dictionary: "english", any_word: true }
  #   }
  # }

  multisearchable against: [:name, :description]

  validates :name, :address, :city, :state, :zip, :lat, :lng,
            :phone_number, :description, presence: true

  has_attached_file :image, default_url: "restaurant_avatar.ico"
  # has_many :reviews
  # has_many :reviewers, through: reviews, source: :reviewer
  # has_many :hh_types
  # has_many :prices, through: :reviews, source: :price (get average price from this?)
  # has_many :photos
end
