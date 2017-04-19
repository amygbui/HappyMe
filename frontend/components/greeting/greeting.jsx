import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
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
        <ul id="user-dropdown-btn">
          <img src={ currentUser.image_url }
               alt={`Hello ${currentUser}`} />

          <button className="session-link"
                  onClick={ this.logout }>
            Log Out
          </button>
        </ul>
      );
    } else {
      header = (
        <nav className="session-link">
          <Link to='signup'>Sign Up</Link>
        </nav>
      );
    }

    return(
      <div className="header">
        <header className="header-fixed">
          <Link to='/'><h1>HappyMe</h1></Link>
          <form>
            <input type="search" placeholder="Let's get happy!" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </form>
          { header }
        </header>

        <nav className="nav">
          <nav className="feature-pages">
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

export default Greeting;
