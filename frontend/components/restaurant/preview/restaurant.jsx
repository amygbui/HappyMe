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
      <li>
        <Link to={`/restaurants/${id}`}>{ name }</Link>

        <div>
          { address }
          { city }, { state } { zip }
          { phone_number }
        </div>

        { description }
      </li>
    );
  }
};

export default Restaurant;
