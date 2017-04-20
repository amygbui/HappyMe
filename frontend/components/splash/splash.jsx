import React from 'react';
import { Link } from 'react-router';

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
        <ul>
          <img src={ currentUser.image_url }
               alt={`Hello ${currentUser}`} />

          <button onClick={ this.logout }>
            Log Out
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
      <div className="splash">
        <img src={ window.images.backsplash } />

        <main>
          <h1>HappyMe</h1>
          <form>
            <input type="search" placeholder="Let's get happy!" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </form>

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
      </div>
    )
  }
}

export default Splash;
