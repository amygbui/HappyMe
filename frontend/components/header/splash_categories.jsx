import React from 'react';
import { Link, hashHistory } from 'react-router';

class SplashCategories extends React.Component {
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
      <article className="categories">
        <h2>Browse Restaurants by Category</h2>
        <p>
          <Link value="beer" onClick={ this.makeSearch }>
            <img src={ window.images.beer } />
            Beer
          </Link>
          <Link value="cocktail" onClick={ this.makeSearch }>
            <img src={ window.images.cocktails } />
            Cocktails
          </Link>
          <Link value="oyster" onClick={ this.makeSearch }>
            <img src={ window.images.oysters } />
            Oysters
          </Link>
          <Link value="food pizza fries" onClick={ this.makeSearch }>
            <img src={ window.images.food } />
            Food
          </Link>
        </p>
      </article>
    )
  }
};

export default SplashCategories;
