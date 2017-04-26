import React from 'react';
import { Link, hashHistory } from 'react-router';

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
    this.highlightStar = this.highlightStar.bind(this);
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

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.restaurant !== nextProps.restaurant && nextProps.restaurant) {
  //     this.props.fetchRestaurant(this.props.params.restaurantId);
  //     this.props.fetchReviews(this.props.params.restaurantId);
  //   }
  // }

  submitForm(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => hashHistory.push(`/restaurants/${this.props.params.restaurantId}`));
  }

  update(e) {
    this.setState({ review: e.target.value });
  }

  highlightStar(e) {
    this.setState({ rating: e.target.getAttribute("value") });
  }

  stars() {
    const rating = this.state.rating;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i <= rating & rating != 0) {
        stars.push(
          <li key={ i }>
            <img src={ window.images.gold_star }
                 value={ i } onClick={ this.highlightStar } />
          </li>);
      } else {
        stars.push(
          <li key={ i }>
            <img src={ window.images.silver_star }
                 value={ i } onClick={ this.highlightStar } />
          </li>);
      }
    }

    return stars;
  }

  render() {
    const restaurant = this.props.restaurant;

    if (restaurant) {
      return(
        <div className="review-form">
          <section className="form-input">
            <h2>Write a Review</h2>

            <article>
              <img src={ restaurant.image_url } />
              <div>
                <Link to="/restaurants/${restaurant.id}">
                  { restaurant.name }
                </Link> <br />

                <div>
                  { restaurant.address } <br />
                  { restaurant.city }, { restaurant.state } { restaurant.zip}
                </div>
              </div>
            </article>

            <h3>Your review</h3>
            <form>
              <section>
                <figure>
                  <ul className="stars">
                    { this.stars() }
                  </ul>
                  Select your rating.
                </figure>
                <textarea
                  onChange={ this.update }
                  value={ this.state.review }
                  placeholder="Got the inside scoop on the best happy hours? Let others know so they can get happy too!" />
              </section>

              <Link to={`/restaurants/${this.props.params.restaurantId}`}>
                <button onClick={ this.submitForm }>
                  Submit
                </button>
              </Link>
            </form>

          </section>
          <aside>
            <h2>Reviews for {restaurant.name }</h2>
            <ReviewContainer restaurantId={ restaurant.id } className="review-show" />
          </aside>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default ReviewForm;
