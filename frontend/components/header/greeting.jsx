import React from 'react';
import { Link, hashHistory } from 'react-router';

import SearchContainer from '../search/search_container';
import Dropdown from './dropdown';

class Greeting extends React.Component {
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
            <ul>
              <li>
                <Link value="beer" onClick={ this.makeSearch }>
                  <i className="fa fa-beer" aria-hidden="true"></i>
                  Beers
                </Link>
              </li>
              <li>
                <Link value="cocktail" onClick={ this.makeSearch }>
                  <i className="fa fa-glass" aria-hidden="true"></i>
                  Cocktails
                </Link>
              </li>
              <li>
                <Link value="oyster" onClick={ this.makeSearch }>
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  Oysters
                </Link>
              </li>
              <li>
                <Link value="food pizza fries" onClick={ this.makeSearch }>
                  <i className="fa fa-cutlery" aria-hidden="true"></i>
                  Food
                </Link>
              </li>
            </ul>
            { login }
          </article>
        </section>
      </div>
    )
  }
}

export default Greeting;
