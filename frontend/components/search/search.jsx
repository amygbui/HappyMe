import React from 'react';
import { hashHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  ////// TESTING ONLY
  // componentDidMount() {
  //   this.props.fetchRestaurants("wine");
  // }

  update(e) {
    this.setState({ query: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchRestaurants(this.state.query)
      .then(() => {
        if (location.hash !== "#/search") {
          return hashHistory.push("/search")
        }
      });
  }

  render() {
    const searchButton = (
      <i className="fa fa-search" aria-hidden="true"></i>
    )

    let searchMessage;
    // if (location.hash === "#/search") {
    //   searchMessage = (
    //     <div>
    //       Your search results for { `${this.state.query}` }
    //     </div>
    //   )
    // }

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
