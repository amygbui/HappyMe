import React from 'react';
import { Link } from 'react-router';

import ReviewContainer from '../../review/review_container';
import Rating from '../../rating/rating';
import RestaurantMap from '../../map/restaurant_map';

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img1: "img-default",
                   img2: "img-selected",
                   img3: "img-default"
                 };
    this.switchHover = this.switchHover.bind(this);
    this.resetHover = this.resetHover.bind(this);
  }

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

  switchHover(e) {
    const images = ["img1", "img2", "img3"];
    const selected = e.currentTarget.getAttribute("value");
    images.filter(el => el !== selected)
          .map(el => this.setState({ [el]: "img-default" }));
    this.setState({ [selected]: "img-selected" });
  }

  resetHover(e) {
    this.setState({ img1: "img-default",
                    img2: "img-selected", img3: "img-default"})
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
          <section>
            <h2>{ name }</h2>
            <Rating rating={ average_rating } />
            Restaurant type here<br />

            <article className="address">
              <div>
                <RestaurantMap />
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
            <Link to={`/restaurants/${id}/review/${formType}`}>
              <button className="add-review" to="/review">
                <i className="fa fa-star" aria-hidden="true"></i>
                { reviewButton }
              </button>
            </Link>

            <section className="photo-highlights">
              <img className={ this.state.img1 }
                   value={ "img1" }
                   onMouseEnter={ this.switchHover }
                   onMouseLeave={ this.resetHover }
                   src={ window.images.oysters1 } />
              <img className={ this.state.img2 }
                   value={ "img2" }
                   onMouseEnter={ this.switchHover }
                   onMouseLeave={ this.resetHover }
                   src={ window.images.oysters2 } />
              <img className={ this.state.img3 }
                   value={ "img3" }
                   onMouseEnter={ this.switchHover }
                   onMouseLeave={ this.resetHover }
                   src={ window.images.oysters3 } />
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
