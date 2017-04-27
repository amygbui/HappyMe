import React from 'react';
import { Link } from 'react-router';

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
    if (!userIds.includes(nextProps.params.userId)) {
      this.props.fetchUser(nextProps.params.userId)
    };
  }

  render() {
    if (!this.props.user) {
      return(<div>Loading...</div>)
    }
    const { id, name, image_url, reviews } = this.props.user
    const totalReviews = Object.keys(reviews).length

    const formattedReviews = reviews.map(review => {
      const { id, rating, date, restaurant } = review;

      return(
        <li key={ review.id } className="single-review">
          <article className="reviewed-restaurant">
            <img src={ restaurant.image_url } />
            <div>
              <Link to={`/restaurants/${restaurant.id}`}>
                { restaurant.name }
              </Link> <br />

              <p>
                { restaurant.address } <br />
                { restaurant.city }, { restaurant.state } { restaurant.zip}
              </p>
            </div>
          </article>

          <section className="user-review">
            <article className="user-rating">
              <Rating rating={ rating } /> { date }
              </article>
              { review.review }
          </section>
        </li>
      )
    })

    let addFriend
    if (!this.props.currentUser || this.props.currentUser.id !== parseInt(this.props.params.userId)) {
      addFriend = (
        <li>
          <i className="fa fa-user-plus" aria-hidden="true"></i>
          Add Friend
        </li>
      )
    }

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
              { addFriend}
              <li>
                <i className="fa fa-picture-o" aria-hidden="true"></i>
                <Link to={ `/users/${id}/upload-profile-pic` }>
                  Change Profile Photo
                </Link>
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
