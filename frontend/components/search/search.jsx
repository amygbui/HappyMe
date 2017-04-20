import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <form>
        <input type="search" placeholder="Let's get happy!" />
        <i className="fa fa-search" aria-hidden="true"></i>
      </form>
    )
  }
}

export default Search;
