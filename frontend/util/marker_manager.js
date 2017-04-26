export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.createMarkerFromRestaurant = this.createMarkerFromRestaurant.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(restaurants) {
    restaurants.map(restaurant => this.createMarkerFromRestaurant(restaurant));
  }

  createMarkerFromRestaurant(restaurant) {
    if (!Object.keys(this.markers).includes(restaurant.id)) {
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
}
