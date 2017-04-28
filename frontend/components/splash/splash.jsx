import React from 'react';
import { Link, hashHistory } from 'react-router';

import SearchContainer from '../search/search_container';
import RestaurantSnippet from '../restaurant/restaurant_snippet';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: "dropdown-details hidden" }
    this.logout = this.logout.bind(this);
    this.makeSearch = this.makeSearch.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
  }

  componentDidMount() {
    this.props.fetchRestaurants("GetTheNewestPlaces", this.props.bounds)
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
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

  showDetails(e) {
    this.setState({ dropdown: "dropdown-details" })
  }

  hideDetails(e) {
    this.setState({ dropdown: "dropdown-details hidden" })
  }

  render() {
    let header;
    let currentUser = this.props.currentUser

    if (currentUser) {
      header = (
        <div className="splash-session">
          <section id="user-dropdown-btn">
            <button onMouseEnter={ this.showDetails }
              onMouseLeave={ this.hideDetails }>
              <img src={ currentUser.image_url }
                alt={`Hello ${currentUser}`} />

              <ul className={ this.state.dropdown }>
                <span>Hello, { currentUser.name }</span>
                <li>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <Link to={ `users/${currentUser.id}` }>View Profile</Link>
                </li>
                <li>
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                  <Link onClick={ this.logout }>Log Out</Link>
                </li>
              </ul>
            </button>
          </section>
        </div>
      );
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

          { header }
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
