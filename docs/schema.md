# Schema Information

## Users
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Businesses
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
name            | string    | not null, indexed
address         | array     | not null

## Ratings & Reviews
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
rating          | integer   | not null
user_id         | integer   | not null, foreign key (references users)
business_id     | integer   | not null, foreign key (references businesses)

add_index [author_id, business_id]
