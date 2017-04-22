import * as RestaurantApiUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

export const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const fetchRestaurants = query => dispatch => (
  RestaurantApiUtil.fetchRestaurants(query)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
);

export const fetchRestaurant = id => dispatch => (
  RestaurantApiUtil.fetchRestaurant(id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
);

export const createRestaurant = restaurant => dispatch => (
  RestaurantApiUtil.createRestaurant(restaurant)
    .then(newRestaurant => dispatch(receiveRestaurant(newRestaurant)))
);

export const updateRestaurant = restaurant => dispatch => (
  RestaurantApiUtil.updateRestaurant(restaurant)
    .then(updatedRestaurant => dispatch(receiveRestaurant(updatedRestaurant)))
);
