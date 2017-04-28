import React from 'react';
import { Link, hashHistory } from 'react-router';

import SearchContainer from '../search/search_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: "dropdown-details hidden" }
    this.logout = this.logout.bind(this);
    this.makeSearch = this.makeSearch.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.currentUser) {
  //     this.props.fetchUser(this.props.currentUser.id)
  //   }
  // }

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
    let login;
    let currentUser = this.props.currentUser
    if (currentUser) {
      header = (
        <div id="user-dropdown-btn">
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

        </div>
      );

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
          { header }
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
