import React from 'react';
import { Link } from 'react-router';

import Restaurant from '../../restaurant/preview/restaurant';
import ReviewIndex from '../review_index';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { rating: "", review: "" },
      restaurant: props.restaurant
    };

    this.submitForm = this.submitForm.bind(this);
    this.highlightStar = this.highlightStar.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.params.restaurantId);
  }

  componentWillReceiveProps(nextProps) {

  }

  submitForm(e) {
    e.preventDefault();
  }

  highlightStar(e) {

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
                { restaurant.address } <br />
                { restaurant.city }, { restaurant.state } { restaurant.zip}
              </div>
            </article>

            <h3>Your review</h3>
            <form>
              <section>
                <figure>
                  <img id="star"
                       onClick={ this.highlightStar }
                       src={ window.images.silver_star } />
                  <img id="star"
                       onClick={ this.highlightStar }
                       src={ window.images.silver_star } />
                  <img id="star"
                       onClick={ this.highlightStar }
                       src={ window.images.silver_star } />
                  <img id="star"
                       onClick={ this.highlightStar }
                       src={ window.images.silver_star } />
                  <img id="star"
                       onClick={ this.highlightStar }
                       src={ window.images.silver_star } />
                  Select your rating.
                </figure>
                <input type="textarea" placeholder="Got the inside scoop on the best happy hours? Let others know so they can enjoy it too!" />
              </section>

              <Link to={`/restaurants/${this.props.params.restaurantId}`}>
                <button onClick={ this.submitForm }>
                  Submit
                </button>
              </Link>
            </form>

          </section>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}
// <aside>
//   <ReviewIndex />
// </aside>

export default ReviewForm;
