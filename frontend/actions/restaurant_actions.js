import * from SearchApiUtil from '../util/search_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

e
export const receiveRestaurants = restaurants => {
  return {
    type: RECEIVE_RESTAURANTES,
    restaurants
  };
};

export const receiveRestaurants = restaurant => {
  return {
    type: RECEIVE_RESTAURANT,
    restaurant
  };
};

export const fetchRestaurants = () => dispatch => {
  return SearchApiUtil.fetchRestaurants()
    .then(restaurants => dispatch(receiveRestaurants(restaurants)));
};

export const fetchRestaurant = id => dispatch => {
  return SearchApiUtil.fetchRestaurant(id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)));
};

export const createRestaurant = restaurant => dispatch => {
  return SearchApiUtil.createRestaurant(restaurant)
    .then(newRestaurant => dispatch(receiveRestaurant(newRestaurant)));
};

export const updateRestaurant = restaurant => dispatch => {
  return SearchApiUtil.updateRestaurant(restaurant)
    .then(updatedRestaurant => dispatch(receiveRestaurant(updatedRestaurant)));
};
