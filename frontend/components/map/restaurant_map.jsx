import React from 'react';

import MarkerManager from '../../util/marker_manager';

class RestaurantMap extends React.Component {
  constructor(props) {
    super(props)
    this.calculateCenter = this.calculateCenter.bind(this);
  }

  calculateCenter() {
    const { northeast, southwest } = this.props.bounds;
    const lat = (northeast.lat + southwest.lat) / 2;
    const lng = (northeast.lng + southwest.lng) / 2;

    return { lat, lng }
  }

  componentDidMount() {
    const mapOptions = {
      center: this.calculateCenter(),
      zoom: 11
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    if (Object.values(this.props.restaurants).length > 0) {
      this.MarkerManager.updateMarkers(Object.values(this.props.restaurants));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.restaurants != nextProps.restaurants) {
      this.map.setCenter(this.calculateCenter());
      this.map.setZoom(11);

      if (Object.values(nextProps.restaurants).length > 0) {
        this.MarkerManager.updateMarkers(Object.values(nextProps.restaurants));
      } else {
        this.MarkerManager.deleteMarkers();
      }
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
