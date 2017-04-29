import React from 'react';
import { Link, hashHistory } from 'react-router';

import SearchContainer from '../search/search_container';
import RestaurantSnippet from '../restaurant/restaurant_snippet';
import Dropdown from './dropdown';
import SplashCategories from './splash_categories';
import NavLinks from './nav_links';

class Splash extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants("GetTheNewestPlaces", this.props.bounds)
  }

  render() {
    let header;
    let currentUser = this.props.currentUser

    if (currentUser) {
      header = (
        <div className="splash-session">
          <Dropdown currentUser={ this.props.currentUser}
                    logout={ this.props.logout } />
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
              <NavLinks bounds={ this.props.bounds }
                        fetchRestaurants = { this.props.fetchRestaurants }/>
            </nav>
          </main>

          { header }
        </header>

        <section className="content">
          <article className="highlights">
            <h2>Hot & Popping Restaurants</h2>
            <div className="restaurant-snippets">
              { restaurantSnippets }
            </div>
          </article>

          <SplashCategories bounds={ this.props.bounds }
                            fetchRestaurants={ this.props.fetchRestaurants }/>
        </section>
    </div>
    )
  }
}

export default Splash;
