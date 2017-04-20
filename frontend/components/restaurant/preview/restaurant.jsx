import React from 'react';
import { Link } from 'react-router';

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {
      id, name, address, city, state,
      zip, phone_number, description
    } = this.props.restaurant;

    return (
      <li className="restaurant-preview">
        <section className="preview-info">
          PIC HERE

          <div>
            <Link to={`/restaurants/${id}`}>{ name }</Link>
            <br />
            Review info will go here!
            <br />
            Restaurant type will be here!
          </div>

          <div>
            { address }
            <br />
            { city }, { state } { zip }
            <br />
            { phone_number }
          </div>
        </section>

        { description }
      </li>
    );
  }
};

export default Restaurant;
