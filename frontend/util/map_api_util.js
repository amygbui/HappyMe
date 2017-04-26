export const fetchBounds = address => {
  return $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCTLQ74n9S3-LPFLOv4qOmDETItohlTj0g`
  });
};


// .then(cityData => cityData[0].geometry.bounds)
// bounds.southwest & bounds.northwest
