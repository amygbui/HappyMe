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

### Restaurants (with nested routes)
* `GET /api/restaurants` - shows matched (or all) restaurants
* `POST /api/restaurants` - adds new restaurant
* `GET /api/restaurants/:id` - shows restaurant show page
    * `GET api/restaurants/:id/photos` - index of all photos for a single restaurant
    * `GET /api/restaurants/:id/reviews` - index all reviews for a single restaurant
    * `GET /api/restaurants/:id/types` - index all types for a single restaurant
    * `POST /api/restaurants/:id/types` - adds dessert type to restaurant by name
* `PATCH /api/restaurants/:id` - edit restaurant info

### Dessert Types
* `DELETE /api/types/:type_id` - removes dessert type from restaurant
