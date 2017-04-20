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
        <nav>
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
        </main>
        
          { header }

        <nav>
          <nav>
            <Link to='/'>Beers</Link>
            <Link to='/'>Cocktails</Link>
            <Link to='/'>Oysters</Link>
            <Link to='/'>Food</Link>
          </nav>
          <Link to='login'>Log In</Link>
        </nav>
      </div>
    )
  }
}

export default Splash;
