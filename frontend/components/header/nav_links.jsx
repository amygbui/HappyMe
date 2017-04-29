import React from 'react';
import { Link, hashHistory } from 'react-router';

class NavLinks extends React.Component {
  constructor(props) {
    super(props);
    this.makeSearch = this.makeSearch.bind(this);
  }

  makeSearch(e) {
    e.preventDefault();
    this.props.fetchRestaurants(e.currentTarget.getAttribute("value"), this.props.bounds)
      .then(() => {
        if (location.hash !== "#/search") {
          return hashHistory.push("/search")
        }
      });
  }

  render() {
    return (
      <ul>
        <li>
          <Link value="beer" onClick={ this.makeSearch }>
            <i className="fa fa-beer" aria-hidden="true"></i>
            Beers
          </Link>
        </li>
        <li>
          <Link value="cocktail" onClick={ this.makeSearch }>
            <i className="fa fa-glass" aria-hidden="true"></i>
            Cocktails
          </Link>
        </li>
        <li>
          <Link value="oyster" onClick={ this.makeSearch }>
            <i className="fa fa-heart" aria-hidden="true"></i>
            Oysters
          </Link>
        </li>
        <li>
          <Link value="food pizza fries" onClick={ this.makeSearch }>
            <i className="fa fa-cutlery" aria-hidden="true"></i>
            Food
          </Link>
        </li>
      </ul>
    )
  }
};

export default NavLinks;
