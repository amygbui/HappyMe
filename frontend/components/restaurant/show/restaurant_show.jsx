import React from 'react';

import ReviewContainer from '../../review/review_container';
import Rating from '../../rating/rating';

class RestaurantShow extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.params.restaurantId);
    this.props.fetchRestaurant(this.props.params.restaurantId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.restaurantId !== nextProps.params.restaurantId) {
      this.props.fetchReviews(nextProps.params.restaurantId);
      this.props.fetchRestaurant(nextProps.params.restaurantId);
    }
  }

  render () {
    if (this.props.restaurant === undefined) {
      return <div>Loading...</div>
    }

    const {
      id, name, address, city, state, zip,
      phone_number, description, image_url,
      average_rating, all_reviewers
    } = this.props.restaurant;

    const reviewAction = all_reviewers.includes(currentUser.username) ?
                           "Update My Revew" : "Write a Review"

    return (
      <div className="restaurant-show">
        <main className="business-details">
          <section>
            <h2>{ name }</h2>
            <Rating rating={ average_rating } />
            Restaurant type here<br />

            <article className="address">
              <div className="show-map">
                Map goes here
              </div>

              <aside>
                <div className="business-info">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <div>
                    { address }<br />
                    { city }, { state } { zip }<br />
                  </div>
                </div>

                <div className="business-info">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <h3>{ phone_number }</h3>
                </div>
              </aside>
            </article>
          </section>

          <div className="business-right">
            <button className="add-review" to="/review">
              <i className="fa fa-star" aria-hidden="true"></i>
              { reviewAction }
            </button>

            <section className="photo-highlights">
              <img src={ window.images.oysters1 } />
              <img src={ window.images.oysters2 } />
              <img src={ window.images.oysters3 } />
            </section>
          </div>
        </main>

        <section className="reviews">
          <h2><strong>Recommended Reviews</strong> for { name }</h2>
          <ReviewContainer restaurantId={ id } />
        </section>
      </div>
    )
  }
}

export default RestaurantShow;
