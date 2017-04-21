class Review < ApplicationRecord
  validates :rating, :review, :reviewer, :restaurant, presence: true

  belongs_to :reviewer,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :restaurant,
    class_name: 'Restaurant',
    primary_key: :id,
    foreign_key: :restaurant_id
end
