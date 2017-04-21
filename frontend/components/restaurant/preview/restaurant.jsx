import React from 'react';
import { Link } from 'react-router';

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {
      id, name, address, city, state, zip,
      phone_number, description, image_url
    } = this.props.restaurant;

    return (
      <li className="restaurant-preview">
        <section className="preview-info">
          <img src={ image_url} />

          <div>
            <strong>
              <Link to={`/restaurants/${id}`}>{ name }</Link>
            </strong>
            <br />
            Rating will go here!
            <br />
            Restaurant types here!
          </div>

          <div id="address">
            { address }
            <br />
            { city }, { state } { zip }
            <br />
            { phone_number }
          </div>
        </section>

        <p>{ description }</p>
      </li>
    );
  }
};

export default Restaurant;
