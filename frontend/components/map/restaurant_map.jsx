import React from 'react';

import MarkerManager from '../../util/marker_manager';

class RestaurantMap extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { northeast, southwest } = this.props.bounds
    let lat = (northeast.lat + southwest.lat) / 2.0;
    let lng = (northeast.lng + southwest.lng) / 2.0;

    if (Object.values(this.props.restaurants) > 0) {
      lat = Object.values(this.props.restaurants)[0].lat;
      lng = Object.values(this.props.restaurants)[0].lng;
    }

    const mapOptions = {
      center: { lat, lng },
      zoom: 11
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(Object.values(this.props.restaurants));

    // const markers = Object.values(this.MarkerManager.markers)
    // const bounds = new google.maps.LatLngBounds();
    // for (let i = 0; i < markers.length; i++) {
    //   bounds.extend(markers[i].getPosition());
    // }
    //
    // this.map.fitBounds(bounds);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.restaurants != nextProps.restaurants) {
      this.MarkerManager.updateMarkers(Object.values(nextProps.restaurants));
    }
  }

  render() {
    return(
      <div id="map-container" ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default RestaurantMap;
