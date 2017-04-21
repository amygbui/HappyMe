class Review < ApplicationRecord
  validates :rating, :review, :author, :restaurant, presence: true

  belongs_to :reviewer,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :reviewer_id

  belongs_to :restaurant,
    class_name: 'Restaurant',
    primary_key: :id,
    foreign_key: :restaurant_id
end
