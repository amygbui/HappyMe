import React from 'react';

class RestaurantShow extends React.Component {
  // componentDidMount() {
  //   this.props.fetchRestaurant(this.props.params.postId);
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchRestaurant(this.props.params.postId);
  //   // THIS DOESN'T DO ANYTHING
  // }

  render () {
    // if (this.props.restaurant === undefined) {
    //   return <div>Loading...</div>
    // }

    const {
      id, name, address, city, state, zip,
      phone_number, description, image_url
    } = this.props.restaurant;

    return (
      <div>
        <main>
          <h2>{ name }</h2>
          Restaurant info will go here!
        </main>

        <section>Reviews go here</section>
      </div>
    )
  }
}

export default RestaurantShow;
