import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

class RestaurantSnippet extends React.Component {
  render() {
    const {
      id, name, address, city, state, image_url_big,
      zip, average_rating, all_reviewers } = this.props.restaurant;

    return(
      <Link className="snippet" to={`/restaurants/${id}`}>
        <img src={ image_url_big } />

        <section>
          <h3>{ name }</h3>
          <div className="rating">
            <Rating initialRate={ average_rating }
              empty={['fa fa-star-o fa-2x']}
              full={['fa fa-star fa-2x']}
              readonly />
          </div> { all_reviewers.length }
          { address } <br />
          { city }, { state } { zip}
        </section>

      </Link>
    )
  }
}

export default RestaurantSnippet;
