import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

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
            <Rating initialRate={ average_rating }
                    empty={['fa fa-star-o fa-2x']}
                    full={['fa fa-star fa-2x']}
                    readonly
                    className="react-rating" />
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
