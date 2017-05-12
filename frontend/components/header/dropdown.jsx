import React from 'react';
import { Link } from 'react-router';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: "dropdown-details hidden" };
    this.logout = this.logout.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  showDetails(e) {
    this.setState({ dropdown: "dropdown-details" })
  }

  hideDetails(e) {
    this.setState({ dropdown: "dropdown-details hidden" })
  }

  render() {
    if (this.props.currentUser) {
      const currentUser = this.props.currentUser;
      return (
        <div>
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
      )
    } else {
      return(<div></div>)
    }
  }
}

export default Dropdown;
