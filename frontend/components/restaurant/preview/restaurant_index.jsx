import React from 'react';

import Restaurant from './restaurant'

class RestaurantIndex extends React.Component {
  render() {
    const restaurants = Object.values(this.props.restaurants).map(restaurant => (
      <Restaurant
        key={ restaurant.id }
        restaurant={ restaurant }
        fetchRestaurant={ this.props.fetchRestaurant }/>
    ))

    return (
      <div className="search-business">
        <ul>
          { restaurants }
        </ul>
      </div>
    );
  }
}

export default RestaurantIndex;
