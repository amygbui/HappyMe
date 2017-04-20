import React from 'react';

import RestaurantPreviewItem from './restaurant_preview_item'

class RestaurantPreviewIndex extends React.Component {
  render() {
    const restaurants = Object.values(this.props.restaurants).map(restaurant => (
      <RestaurantPreviewItem
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

export default RestaurantPreviewIndex;
