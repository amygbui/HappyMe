import React from 'react';

import Restaurant from './restaurant'

class RestaurantIndex extends React.Component {
  render() {
    const restaurants = Object.values(this.props.restaurants);
    let matchedRestaurants;

    if (restaurants.length > 0) {
      matchedRestaurants = restaurants.map(restaurant => (
        <Restaurant
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
      </div>
    );
  }
}

export default RestaurantIndex;
