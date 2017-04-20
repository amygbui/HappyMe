import React from 'react';
import { hashHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    /////// TESTING PURPOSES ONLY!!!!! //////
    this.props.fetchRestaurants();
  }

  update(e) {
    this.setState({ query: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.fetchRestaurants(this.state.query)
      .then(() => hashHistory.push("/search"))
      .then(() => this.setState({ query: "" }));
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
