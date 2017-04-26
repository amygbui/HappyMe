import React from 'react';
import { Link } from 'react-router';

import Restaurant from '../../restaurant/preview/restaurant';
import ReviewContainer from '../review_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    let id;
    let review = "";
    let rating = "";
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
  }

  update(e) {
    this.setState({ review: e.target.value });
  }

  highlightStar(e) {
    this.setState({ rating: e.target.getAttribute("value") })
  }

  stars() {

  }

  render() {
    // <Restaurant key={ restaurant.id }
    //   restaurant={ restaurant }
    //   fetchRestaurant={ this.props.fetchRestaurant } />
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
                  <img id="star"
                       value={ 1 }
                       onClick={ this.highlightStar }
                       src={ window.images.silver_star } />
                  <img id="star"
                       value={ 2 }
                       onClick={ this.highlightStar }
                       src={ window.images.silver_star } />
                  <img id="star"
                       value={ 3 }
                       onClick={ this.highlightStar }
                       src={ window.images.silver_star } />
                  <img id="star"
                       value={ 4 }
                       onClick={ this.highlightStar }
                       src={ window.images.silver_star } />
                  <img id="star"
                       value={ 5 }
                       onClick={ this.highlightStar }
                       src={ window.images.silver_star } />
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
