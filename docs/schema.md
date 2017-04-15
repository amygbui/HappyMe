# Schema Information

## Users
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null
password_digest | string    | not null
session_token   | string    | not null

add_index :email, :session_token, unique: true
validates :name, :email, :password_digest, :session_token presence: true
validates :email, :session_token, uniqueness: true
validates :password, length: { minimum: 6, allow_nil: true }
has_many :reviews
has_many :reviewed_business, through: reviews, source: :business

## Businesses
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
name            | string    | not null, indexed
address         | string    | not null
city            | string    | not null
state           | string    | not null
zip             | integer   | not null
phone_number    | string    | not null
lat             | float     | not null
lon             | float     | not null
description     | string    | not null
profile_pic_url | string    | not null

add_index [:name, :address], unique: true
validates :name, :address, city, state, zip, :phone_number, :description, :profile_pic_url, presence: true
has_many :reviews
has_many :reviewers, through: reviews, source: :reviewer
has_many :dessert_types (change as needed if switched to HH offerings)
has_many :prices, through: :reviews, source: :price (get average price from this?)
has_many :photos

# Dessert Types (can be interchanged with HH offerings)
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
business_id     | integer   | not null, foreign key (references businesses)
type            | string    | not null

add_index :type, :business_id
add_index [:type, :business_id], unique: true
validates :business, :type, presence: true
belongs_to :business

## Ratings & Reviews
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
rating          | integer   | not null
review          | text      | not null
reviewer_id     | integer   | not null, foreign key (references users)
business_id     | integer   | not null, foreign key (references businesses)
price           | integer   | not null

add_index [:author_id, :business_id]
validates :rating, :review, :author, :business, :price, presence: true
belongs_to :reviewer
belongs_to :business

## Photos
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
image_url       | string    | not null
business_id     | integer   | not null

validates :image_url, :business, presence: true
belongs_to :business
