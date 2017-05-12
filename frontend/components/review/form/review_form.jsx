import React from 'react';
import { Link, hashHistory } from 'react-router';
import Rating from 'react-rating';

import Restaurant from '../../restaurant/preview/restaurant';
import ReviewContainer from '../review_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    let id;
    let review = "";
    let rating = 0;
    const editReview = props.reviews[props.params.reviewId]

    if (editReview) {
      id = editReview.id
      review = editReview.review;
      rating = editReview.rating;
    }

    this.state = { id, rating, review,
                   restaurant_id: props.params.restaurantId }

    this.submitForm = this.submitForm.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const restaurantId = parseInt(this.props.params.restaurantId);
    const reviewId = parseInt(this.props.params.reviewId);
    if (!this.props.restaurant) {
      this.props.fetchRestaurant(restaurantId);
      this.props.fetchReviews(restaurantId)
        .then((reviews => {
          if (reviews.reviews[reviewId]) {
            const { rating, review } = reviews.reviews[reviewId];
            this.setState({ rating, review, id: reviewId })
          }
        }).bind(this))
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => hashHistory.push(`/restaurants/${this.props.params.restaurantId}`));
  }

  update(e) {
    this.setState({ review: e.currentTarget.value });
  }

  updateRating(rate) {
    this.setState({ rating: rate });
  }

  render() {
    const restaurant = this.props.restaurant;

    if (restaurant) {
      const {
        id, name, image_url, address,
        city, state, zip
      } = restaurant;

      return(
        <div className="review-form">
          <section className="form-input">
            <h2>Write a Review</h2>

            <article>
              <img src={ image_url } />
              <div>
                <Link to={`/restaurants/${id}`}>
                  { name }
                </Link> <br />

                <div>
                  { address } <br />
                  { city }, { state } { zip}
                </div>
              </div>
            </article>

            <h3>Your review</h3>
            <form>
              <section>
                <figure>
                  <Rating initialRate={ this.state.rating }
                          empty={['fa fa-star-o fa-2x']}
                          full={['fa fa-star fa-2x']}
                          onClick={ rate => this.updateRating(rate) }
                          className="stars" />
                  Select your rating.
                </figure>
                <textarea
                  onChange={ this.update }
                  value={ this.state.review }
                  placeholder="Got the inside scoop on the best happy
                  hours? Let others know so they can get happy too!" />
              </section>

              <Link to={`/restaurants/${id}`}>
                <button onClick={ this.submitForm }>
                  Submit
                </button>
              </Link>
            </form>

          </section>
          <aside>
            <h2>Reviews for {restaurant.name }</h2>
            <ReviewContainer restaurantId={ id } className="review-show" />
          </aside>
        </div>
      )
    } else {
      return (
        <div className="loader">Loading...</div>
      )
    }
  }
}

export default ReviewForm;
