import React from 'react';
import { Link, hashHistory } from 'react-router';

import SearchContainer from '../search/search_container';
import RestaurantSnippet from '../restaurant/restaurant_snippet';
import Dropdown from './dropdown';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.makeSearch = this.makeSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurants("GetTheNewestPlaces", this.props.bounds)
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
    let dropdown;
    let currentUser = this.props.currentUser

    if (currentUser) {
      dropdown = (
        <div className="splash-session">
          <Dropdown />
        </div>
      )
    } else {
      header = (
        <nav className="splash-session">
          <Link to='login'>Log In</Link>
          <Link to='signup'>Sign Up</Link>
        </nav>
      );
    }

    const restaurants = Object.values(this.props.restaurants);
    let restaurantSnippets;
    if (restaurants.length > 0) {
      restaurantSnippets = restaurants.map(restaurant => (
        <RestaurantSnippet key={ restaurant.id } restaurant={ restaurant } />
      ))
    }

    return(
      <div>
        <header className="splash">
          <img src={ window.images.backsplash } />

          <main>
            <h1>HappyMe</h1>
            <SearchContainer />
            <nav>
              <Link value="beer" onClick={ this.makeSearch }>
                <i className="fa fa-beer" aria-hidden="true"></i>
                Beers
              </Link>
              <Link value="cocktail" onClick={ this.makeSearch }>
                <i className="fa fa-glass" aria-hidden="true"></i>
                Cocktails
              </Link>
              <Link value="oyster" onClick={ this.makeSearch }>
                <i className="fa fa-heart" aria-hidden="true"></i>
                Oysters
              </Link>
              <Link value="food pizza fries" onClick={ this.makeSearch }>
                <i className="fa fa-cutlery" aria-hidden="true"></i>
                Food
              </Link>
            </nav>
          </main>

          { dropdown }
        </header>

        <section className="content">
          <article className="highlights">
            <h2>Hot & Popping Restaurants</h2>
            <div className="restaurant-snippets">
              { restaurantSnippets }
            </div>
          </article>

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
        </section>
    </div>
    )
  }
}

export default Splash;
