export const fetchRestaurants = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/restaurants'
  });
};

export const fetchRestaurant = id => {
  return $.ajax({
    method: 'GET',
    url: `api/restaurants/${id}`
  });
};

export const createRestaurant = restaurant => {
  return $.ajax({
    method: 'GET',
    url: `api/restaurants`,
    data: { restaurant }
  });
};

export const updateRestaurant = restaurant => {
  return $.ajax({
    method: 'GET',
    url: `api/restaurants/${restaurant.id}`,
    data: { restaurant }
  });
};
