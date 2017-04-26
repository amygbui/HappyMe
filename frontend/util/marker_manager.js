export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(restaurants) {
    this.markers = {};
    restaurants.map(restaurant => this.createMarkerFromRestaurant(restaurant));
  }

  createMarkerFromRestaurant(restaurant) {
    const position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      description: restaurant.description
    });

    marker.setMap(this.map);
    this.markers[restaurant.id] = restaurant;
  }
}
