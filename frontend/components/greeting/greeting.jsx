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
    if (this.props.currentUser) {
      return(
        <div>
          <h2>Hello, {this.props.currentUser.name}!</h2>
          <button onClick={this.logout}>Log Out</button>
        </div>
      );
    } else {
      return(
        <div>
          <Link to='signup'>Sign Up</Link>
          <Link to='login'>Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
