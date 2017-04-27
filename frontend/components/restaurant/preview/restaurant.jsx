import React from 'react';
import { Link } from 'react-router';

import Rating from '../../rating/rating';

class Restaurant extends React.Component {
  render () {
    const {
      id, name, address, city, state, zip,
      phone_number, description, image_url,
      average_rating
    } = this.props.restaurant;

    return (
      <li className="restaurant-preview">
        <section className="preview-info">
          <img src={ image_url} />

          <div className="name-rating">
            <strong>
              <Link to={`/restaurants/${id}`}>{ name }</Link>
            </strong>
            <Rating rating={ average_rating } />
          </div>

          <div id="preview-address">
            { address }
            <br />
            { city }, { state } { zip }
            <br />
            { phone_number }
          </div>
        </section>

        <p>{ description }</p>
      </li>
    );
  }
};

export default Restaurant;
