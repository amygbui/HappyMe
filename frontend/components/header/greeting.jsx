import React from 'react';
import { Link, hashHistory } from 'react-router';

import SearchContainer from '../search/search_container';
import Dropdown from './dropdown';
import NavLinks from './nav_links';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dropdown;
    let login;
    let currentUser = this.props.currentUser
    if (currentUser) {
      dropdown = <Dropdown />
      login = (<div></div>)
    } else {
      header = (
        <nav className="session-link">
          <Link to='/signup'>Sign Up</Link>
        </nav>
      );
      login = (<Link className="login-button" to='/login'>Log In</Link>)
    }

    return(
      <div className="header">
        <header className="header-fixed">
          <Link to='/'><h1>HappyMe</h1></Link>
          <SearchContainer />
          { dropdown }
        </header>

        <section>
          <article className="nav">
            <NavLinks bounds={ this.props.bounds }
                      fetchRestaurants={ this.props.fetchRestaurants} />
            { login }
          </article>
        </section>
      </div>
    )
  }
}

export default Greeting;
