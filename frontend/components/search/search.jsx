import React from 'react';
import { hashHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ query: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchRestaurants(this.state.query)
      .then(() => {
        hashHistory.push("/search")
      })
      // Oscar suggests we keep the typed in query for now
      // This is b/c we are not navigating to diff 'pages'/url
      // potentially work on persisting query state as bonus?
      // .then(() => this.setState({ query: "" }));
  }

  render() {
    const searchButton = (
      <i className="fa fa-search" aria-hidden="true"></i>
    )

    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="search" placeholder="Let's get happy!"
               value={ this.state.query }
               onChange={ this.update } />

        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    )
  }
}

export default Search;
