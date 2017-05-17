import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", username: "" , password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillUnmount() {
    this.setState = { name: "", username: "", password: "" };
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.setState({ name: "", username: "", password: "" });
      this.props.clearErrors();
    }
  }

  redirect() {
    return this.props.router.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  handleClick(e) {
    e.preventDefault();
    const demoUser = { username: "guest", password: "password" }
    this.props.guestDemo(demoUser).then(() => this.redirect());
  }

  update(property) {
    return e => {
      this.setState({ [property]: e.currentTarget.value });
    };
  }

  render() {
    const actionType = this.props.formType;
    const buttonWord = actionType === '/signup' ? 'Sign Up': 'Log In';

    const linkAction = actionType === '/signup' ? 'login' : 'signup';
    const linkWord = actionType === '/signup' ? 'Log in': 'Sign up';

    const all_errors = this.props.errors
    const errors = Object.keys(this.props.errors).map(id => {
      if (id === "base") {
        return (<li key={ id }>{ all_errors[id] }</li>)
      }
      return (<li key={ id }>{id} {all_errors[id]}</li>)
    });

    let extraFields;
    if (actionType === "/signup") {
      extraFields = (
          <input type="text"
                 onChange={this.update('name')}
                 placeholder="Name"
                 value={this.state.name} />
      )
    }

    return(
      <div className="session">
        <div className="form">
          Welcome to HappyMe
          <form onSubmit={ this.handleSubmit }>
            { extraFields }

            <input type="text"
              onChange={this.update('username')}
              placeholder="Username"
              value={this.state.username} />

            <input type="password"
              onChange={this.update('password')}
              placeholder="Password"
              value={this.state.password} />

            <button>{ buttonWord }</button>
          </form>

          <div className="errors">
            <ul>
              { errors }
            </ul>
          </div>

          <nav>
            <Link to={`/${linkAction}`}>{ linkWord }</Link>|
            <Link className="guest-demo" onClick={ this.handleClick }>Guest Demo</Link>
          </nav>
        </div>

        <img src={ window.images.happyhour } />
      </div>
    );
  }
}

export default SessionForm;
