import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

class UserReview extends React.Component {
  render() {
    const { id, rating, date, restaurant } = this.props.review;
    const review = this.props.review;

    return (
      <li key={ review.id } className="single-review">
        <article className="reviewed-restaurant">
          <img src={ restaurant.image_url } />
          <div>
            <Link to={`/restaurants/${restaurant.id}`}>
              { restaurant.name }
            </Link> <br />

            <p>
              { restaurant.address } <br />
              { restaurant.city }, { restaurant.state } { restaurant.zip}
            </p>
        </div>
      </article>

      <section className="user-review">
        <article className="user-rating">
          <Rating initialRate={ rating }
                  empty={['fa fa-star-o fa-2x']}
                  full={['fa fa-star fa-2x']}
                  readonly
                  className="stars" /> { date }
          </article>
          { review.review }
        </section>
      </li>
    )
  }
}

export default UserReview;
