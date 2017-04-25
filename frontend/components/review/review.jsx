import React from 'react';
import { Link } from 'react-router';

import Rating from '../rating/rating';

class Review extends React.Component {
  render () {
    const { id, rating, review, reviewer } = this.props.review;
    let editLink;
    if (this.props.currentUser){
      if (this.props.currentUser.id === reviewer.id) {
        editLink = (
          <Link id="edit-review" to={`/restaurants/${location.hash.slice(14)}/review/edit/${id}`}>
            Edit review
          </Link>
        )
      }
    }

    return (
      <article className="review">
        <div className="user">
          <img src={ reviewer.image_url } />

          <nav>
            <Link to={`/users/${reviewer.id}`}>{ reviewer.name }</Link>
            { editLink }
          </nav>
        </div>

        <div id="review">
          <div>
            <Rating rating={ rating } />
          </div>
          { review }
        </div>
      </article>
    )
  }
}

export default Review;
