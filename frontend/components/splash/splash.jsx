import React from 'react';
import { Link, hashHistory } from 'react-router';

import SearchContainer from '../search/search_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.makeSearch = this.makeSearch.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  makeSearch(e) {
    e.preventDefault();
    this.props.fetchRestaurants(e.target.getAttribute("value"), this.props.bounds)
      .then(() => {
        if (location.hash !== "#/search") {
          return hashHistory.push("/search")
        }
      });
  }

  render() {
    let header;
    let currentUser = this.props.currentUser

    if (currentUser) {
      header = (
        <ul className="splash-session">
          <button onClick={ this.logout }>
            <img src={ currentUser.image_url }
              alt={`Hello ${currentUser}`} />
          </button>
        </ul>
      );
    } else {
      header = (
        <nav className="splash-session">
          <Link to='login'>Log In</Link>
          <Link to='signup'>Sign Up</Link>
        </nav>
      );
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
              <Link value="all" onClick={ this.makeSearch }>
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
            <div className="restaurant-highlights">

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
              <Link value="all" onClick={ this.makeSearch }>
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
