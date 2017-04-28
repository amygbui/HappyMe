import React from 'react';
import { Link } from 'react-router';

import Rating from '../rating/rating';

class RestaurantSnippet extends React.Component {
  render() {
    const {
      id, name, address, city, state, image_url,
      zip, average_rating, all_reviewers } = this.props.restaurant;

    return(
      <Link className="snippet" to={`/restaurants/${id}`}>
        <img src={ image_url } />

        <section>
          <h3>{ name }</h3>
          <Rating rating={ average_rating } /> { all_reviewers.length }
          { address } <br />
          { city }, { state } { zip}
        </section>

      </Link>
    )
  }
}

export default RestaurantSnippet;
