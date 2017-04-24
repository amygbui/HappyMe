import React from 'react';
import { Link } from 'react-router';

import SearchContainer from '../search/search_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
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
              <Link to='/'>
                <i className="fa fa-beer" aria-hidden="true"></i>
                Beers
              </Link>
              <Link to='/'>
                <i className="fa fa-glass" aria-hidden="true"></i>
                Cocktails
              </Link>
              <Link to='/'>
                <i className="fa fa-heart" aria-hidden="true"></i>
                Oysters
              </Link>
              <Link to='/'>
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
              <Link to="/search">
                <img src={ window.images.beer } />
                Beer
              </Link>
              <Link to="/search">
                <img src={ window.images.cocktails } />
                Cocktails
              </Link>
              <Link to="/search">
                <img src={ window.images.oysters } />
                Oysters
              </Link>
              <Link to="/search">
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
