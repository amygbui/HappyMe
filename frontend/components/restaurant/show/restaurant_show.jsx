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
      phone_number, description, image_url
    } = this.props.restaurant;

    return (
      <div className="restaurant-show">
        <main className="business-details">
          <section>
            <h2>{ name }</h2>
            <Rating />
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
           Photos go here
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
