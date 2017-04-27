import React from 'react';

class UserProfile extends React.Component {
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
    if (!this.props.user) {
      return(<div>Loading...</div>)
    }
    const { name, image_url, reviews } = this.props.user
    const totalReviews = Object.keys(reviews).length

    return(
      <div>
        <main className="userHeader">
          <section className="userStats">
            <article>
              <img src={ image_url } />
              <p>
                <h2>{ name }</h2>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                { totalReviews } reviews
              </p>
            </article>
            <ul>
              <li>
                <i className="fa fa-camera" aria-hidden="true"></i>
                Photos
              </li>
              <li>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                Friends
              </li>
            </ul>
          </section>
        </main>
      </div>
    )
  }
}

export default UserProfile;
