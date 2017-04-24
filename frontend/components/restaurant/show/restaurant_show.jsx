import React from 'react';

import ReviewContainer from '../../review/review_container';

class RestaurantShow extends React.Component {
  componentWillMount() {
    debugger
    this.props.fetchReviews(this.props.params.restaurantId);
    this.props.fetchRestaurant(this.props.params.restaurantId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchRestaurant(this.props.params.postId);
    // THIS DOESN'T DO ANYTHING
  }

  render () {
    // if (this.props.restaurant === undefined) {
    //   return <div>Loading...</div>
    // }

    const {
      id, name, address, city, state, zip,
      phone_number, description, image_url
    } = this.props.restaurant;

    return (
      <div className="restaurant-show">
        <main className="business-details">
          <section>
            <h2>{ name }</h2>
            Rating here<br />
            Restaurant type here<br />

            <article className="address">
              Map Component here<br />
              { address }<br />
              { city }, { state } { zip }<br />
              <h3>{ phone_number }</h3>
            </article>
          </section>
           Photos go here
        </main>

        <section>
          <h2><strong>Recommended Reviews</strong> for { name }</h2>
          <ReviewContainer restaurantId={ id } />
        </section>
      </div>
    )
  }
}

export default RestaurantShow;
