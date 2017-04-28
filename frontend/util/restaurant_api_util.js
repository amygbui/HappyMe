export const fetchRestaurants = (query, bounds) => {
  return $.ajax({
    method: 'GET',
    url: 'api/restaurants',
    data: { query, bounds }
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

export const updateRestaurant = (restaurantId, formData, callback) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/restaurants/${restaurantId}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success: function(formData) {
      callback(formData);
    }
  });
};
