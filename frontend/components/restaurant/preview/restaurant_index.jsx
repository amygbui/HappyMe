import React from 'react';

import RestaurantPreview from './restaurant';
import RestaurantMapContainer from '../../map/restaurant_map_container';
import RestaurantMap from '../../map/restaurant_map';

class RestaurantIndex extends React.Component {
  render() {
    const restaurants = Object.values(this.props.restaurants);
    let matchedRestaurants;

    if (restaurants.length > 0) {
      matchedRestaurants = restaurants.map(restaurant => (
        <RestaurantPreview
          key={ restaurant.id }
          restaurant={ restaurant }
          fetchRestaurant={ this.props.fetchRestaurant }/>
      ))
    } else {
      matchedRestaurants = (
        <div>
          Sorry, nothing matched your search!
        </div>
      )
    }

    return (
      <div className="restaurant-search">
        <div>
          <ul className="restaurant-index">
            { matchedRestaurants }
          </ul>
        </div>
        <aside>
          <RestaurantMapContainer />
        </aside>
      </div>
    );
  }
}

export default RestaurantIndex;
