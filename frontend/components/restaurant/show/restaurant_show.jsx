import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

import ReviewContainer from '../../review/review_container';
import RestaurantMapContainer from '../../map/restaurant_map_container';
import PhotoHighlights from './photo_highlights';

class RestaurantShow extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.params.restaurantId);

    if (!this.props.reviews[this.props.params.restaurantId]){
      this.props.fetchReviews(this.props.params.restaurantId);
    }
  }

  componentWillReceiveProps(nextProps) {
    const curRest = this.props.params.restaurantId;
    const nextRest = nextProps.params.restaurantId;

    if (!this.props.restaurants[nextRest] && curRest !== nextRest) {
      this.props.fetchRestaurant(nextRest);
      this.props.fetchReviews(nextRest);
    }
  }

  render () {
    if (this.props.restaurant === undefined) {
      return <div className="loader">Loading...</div>
    }

    const {
      id, name, address, city, state, zip,
      phone_number, description, image_url,
      average_rating, all_reviewers
    } = this.props.restaurant;

    const currentUser = this.props.currentUser
    const formType = "new";
    let reviewButton;

    if (currentUser) {
      const alreadyReviewed = all_reviewers.includes(currentUser.username)
      reviewButton = alreadyReviewed ?
      "Write An Update" : "Write a Review";
    } else {
      reviewButton = "Write a Review";
    }

    return (
      <div className="restaurant-show">
        <main className="business-details">
          <div className="p">
            <section>
              <h2>{ name }</h2>
              <div id="rating-reviews">
                <Rating initialRate={ average_rating }
                  empty={['fa fa-star-o fa-2x']}
                  full={['fa fa-star fa-2x']}
                  readonly />
                <p>{ all_reviewers.length } reviews</p>
              </div>
            <article className="address">
              <div>
                <RestaurantMapContainer />
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
              <section>
                <Link to={`/restaurants/${id}/review/${formType}`}>
                  <button className="add-review" to="/review">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    { reviewButton }
                  </button>
                </Link>

                <Link to={`/restaurants/${id}/add-photo`}>
                  <button className="add-photo">
                    <i className="fa fa-camera-retro" aria-hidden="true"></i>
                    Add Photo
                  </button>
                </Link>
              </section>
              <PhotoHighlights image_url={ image_url } />
            </div>
          </div>
        </main>

        <section className="reviews">
          <article>
            <h2><strong>Recommended Reviews</strong> for { name }</h2>
            <ReviewContainer restaurantId={ id } />
          </article>
        </section>
      </div>
    )
  }
}

export default RestaurantShow;
