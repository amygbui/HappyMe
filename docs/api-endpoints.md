# API Endpoints

## HTML API
### Root
* `GET /` - loads React web app

## JSON API
### Users
* `POST /api/users` - creates new user
* `PATCH /api/users` - edit existing user
* `GET /api/users/:id` - show a user's profile (bonus)

### Session
* `POST /api/session` - logs user in
* `DELETE /api/session` - logs user out

### Restaurants
* `GET /api/restaurants` - shows matched (or all) restaurants
* `POST /api/restaurants` - adds new restaurant
* `GET /api/restaurants/:id` - shows restaurant show page
* `PATCH /api/restaurants/:id` - edit restaurant info

### Reviews
* `GET /api/restaurants/:id/reviews` - index all reviews for a single restaurant
    * How would nesting work if we wanted to get all reviews by a single user? `GET /api/users/:id/reviews`?
* `POST /api/restaurants/:id/reviews` - adds new review for restaurant
* `GET /api/reviews/:id` - gets single review
* `PATCH /api/reviews/:id` - allows user to update review

### Photos
* `GET api/restaurants/:id/photos` - index of all photos for a single restaurant

### Dessert Types
* `GET /api/restaurants/:id/types` - index all types for a single restaurant
* `POST /api/restaurants/:id/types` - adds dessert type to restaurant by name
* `DELETE /api/types/:type_id` - removes dessert type from restaurant
