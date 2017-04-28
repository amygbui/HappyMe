import React from 'react';
import { Link } from 'react-router';

import Rating from '../../rating/rating';

class RestaurantPreview extends React.Component {
  render () {
    const {
      id, name, address, city, state, zip,
      phone_number, description, image_url,
      average_rating, all_reviewers
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
            <span>
              <i className="fa fa-newspaper-o" aria-hidden="true"></i>
              { all_reviewers.length } reviews
            </span>
          </div>

          <div>
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

export default RestaurantPreview;
