import React from 'react';
import { hashHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", location: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.setBounds = this.setBounds.bind(this);
  }

  update(e) {
    this.setState({ query: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.location.length > 0) {
      this.props.fetchBounds(this.state.location)
        .then(this.props.fetchRestaurants(this.state.query, this.props.bounds))
        .then(() => {
          if (location.hash !== "#/search") {
            return hashHistory.push("/search")
          }
        });
    } else {
      this.props.fetchRestaurants(this.state.query, this.props.bounds)
        .then(() => {
          if (location.hash !== "#/search") {
            return hashHistory.push("/search")
          }
        });
    }
  }

  setBounds(e) {
    this.setState({ location: e.target.value })
  }

  render() {
    const searchButton = (
      <i className="fa fa-search" aria-hidden="true"></i>
    )

    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="search" placeholder="Find: oysters, beer, Shorty's"
          value={ this.state.query }
          onChange={ this.update } />
        <input type="text" placeholder="Near: NYC"
               value={ this.state.location }
               onChange={ this.setBounds } />
        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    )
  }
}

export default Search;
