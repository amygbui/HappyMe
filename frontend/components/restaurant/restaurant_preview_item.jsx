import React from 'react';
import { Link } from 'react-router';

class RestaurantPreviewIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <li>
        { this.props.restaurant.name }
      </li>
    );
  }
};

export default RestaurantPreviewIndex;
