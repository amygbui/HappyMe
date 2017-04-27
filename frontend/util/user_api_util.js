export const fetchUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  });
};

export const updateUser = (userId, formData, callback) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success: function(formData) {
      callback(formData);
    }
  });
};
