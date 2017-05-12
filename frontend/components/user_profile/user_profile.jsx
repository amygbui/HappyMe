import React from 'react';
import { Link } from 'react-router';

import UserReview from './user_review';

class UserProfile extends React.Component {
  componentDidMount() {
    if (!this.props.users[this.props.params.userId]) {
      this.props.fetchUser(this.props.params.userId)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.users[nextProps.params.userId]) {
      this.props.fetchUser(nextProps.params.userId)
    };
  }

  render() {
    if (!this.props.user) {
      return(<div className="loader">Loading...</div>)
    }

    const { id, name, image_url_big, reviews } = this.props.user;
    const totalReviews = Object.keys(reviews).length;

    const formattedReviews = reviews.map(review => {
      return(<UserReview key={ review.id } review={ review } />);
    });

    let addFriend;
    let changeProfilePic;
    if (this.props.currentUser && this.props.currentUser.id === parseInt(this.props.params.userId)) {
      changeProfilePic = (
        <li>
          <i className="fa fa-picture-o" aria-hidden="true"></i>
          <Link to={ `/users/${id}/upload-profile-pic` }>
            Change Profile Picture
          </Link>
        </li>
      )
    }

    return(
      <div>
        <main className="userHeader">
          <section className="userStats">
            <article>
              <img src={ image_url_big } />
              <div>
                <h2>{ name }</h2>
                <ul className="current-stats">
                  <li>
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                    { totalReviews } reviews
                  </li>
                </ul>
              </div>
            </article>

            <ul className="improve-stats">
              { addFriend }
              { changeProfilePic }
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
