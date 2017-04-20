import React from 'react';
import { hashHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  // componentWillUnmount() {
  //   this.setState = { name: "", username: "", password: "" };
  //   this.props.clearErrors();
  // }
  // // do I actually need this????
  //
  // componentWillReceiveProps(newProps) {
  //   if (this.props.formType !== newProps.formType) {
  //     this.setState({ name: "", username: "", password: "" });
  //     this.props.clearErrors();
  //   }
  // }

  update(e) {
    this.setState({ query: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchRestaurants(e.target.value)
      .then(() => hashHistory.push("/search"));
  }

  render() {
    const searchButton = (
      <i className="fa fa-search" aria-hidden="true"></i>
    )

    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="search" placeholder="Let's get happy!"
               onChange={ this.update } />

        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
          </button>
      </form>
    )
  }
}

export default Search;
