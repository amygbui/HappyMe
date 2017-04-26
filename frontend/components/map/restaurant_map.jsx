import React from 'react';

import MarkerManager from '../../util/marker_manager';

class RestaurantMap extends React.Component {
  constructor(props) {
    super(props)
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.750452, lng: -73.986968 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(Object.values(this.props.restaurants));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.restaurants != nextProps.restaurants) {
      this.MarkerManager.updateMarkers(Object.values(this.props.restaurants));
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
