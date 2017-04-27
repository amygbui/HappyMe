import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const userIds = Object.keys(this.props.users);
    if (!userIds.includes(this.props.params.userId)) {
      this.props.fetchUser(this.props.params.userId)
    };
  }

  componentWillReceiveProps(nextProps) {
    const userIds = Object.keys(this.props.users);
    if (!userIds.includes(this.props.params.userId)) {
      this.props.fetchUser(this.props.params.userId)
    };
  }

  render() {
    return(
      <div>HELLO FINE USER</div>
    )
  }
}

export default UserProfile;
