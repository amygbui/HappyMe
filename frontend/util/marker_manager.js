export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(restaurants) {
    this.markers = {};
    restaurants.map(restaurant => this.createMarkerFromRestaurant(restaurant));

    const markers = Object.values(this.markers);
    const bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < markers.length; i++) {
     bounds.extend(markers[i].getPosition());
    }

    this.map.fitBounds(bounds);
  }

  createMarkerFromRestaurant(restaurant) {
    const position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      description: restaurant.description
    });

    marker.setMap(this.map);
    this.markers[restaurant.id] = marker;
  }
}
