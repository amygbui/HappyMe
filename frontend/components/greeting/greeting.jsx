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

    if (this.props.currentUser) {
      header = (
        <div>
          <h2>Hello, {this.props.currentUser.name}!</h2>
          <button onClick={this.logout}>Log Out</button>
        </div>
      );
    } else {
      header = (
        <nav className="session-link">
          <Link to='signup'>Sign Up</Link>
          <Link to='login'>Log In</Link>
        </nav>
      );
    }

    return(
      <div className="greeting">
        <header className="header">
          <Link to='/'><h1>HappyMe</h1></Link>
          { header }
        </header>
        <img src={ window.images.backsplash } />
      </div>
    )
  }
}

export default Greeting;
