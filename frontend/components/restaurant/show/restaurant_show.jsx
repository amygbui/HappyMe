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
          <section>
            <h2>{ name }</h2>
            Rating here<br />
            Restaurant type here<br />

            <article className="address">
              { address }<br />
              { city }, { state } { zip }<br />
              { phone_number }
            </article>
          </section>
           Photos go here
        </main>

        <section>Reviews go here</section>
      </div>
    )
  }
}

export default RestaurantShow;
