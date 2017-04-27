import React from 'react';

import Rating from '../rating/rating';

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

    const formattedReviews = reviews.map(review => {
      return(
        <li key={ review.id } className="single-review">
          <Rating rating={ review.rating } />
          { review.review }
        </li>
      )
    })

    return(
      <div>
        <main className="userHeader">
          <section className="userStats">
            <article>
              <img src={ image_url } />
              <div>
                <h2>{ name }</h2>
                <ul className="current-stats">
                  <li>
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                    { totalReviews } reviews
                  </li>
                  <li>
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    0 Friends
                  </li>
                  <li>
                    <i className="fa fa-camera" aria-hidden="true"></i>
                    0 Photos
                  </li>
                </ul>
              </div>
            </article>
            <ul className="improve-stats">
              <li>
                <i className="fa fa-user-plus" aria-hidden="true"></i>
                Add Friend
              </li>
              <li>
                <i className="fa fa-camera-retro" aria-hidden="true"></i>
                Add Photos
              </li>
              <li>
                <i className="fa fa-users" aria-hidden="true"></i>
                Find Friends
              </li>
            </ul>
          </section>

        </main>
        <article id="user-reviews">
          <h3>Reviews</h3>
          <ul>
            { formattedReviews }
          </ul>
        </article>
      </div>
    )
  }
}

export default UserProfile;
