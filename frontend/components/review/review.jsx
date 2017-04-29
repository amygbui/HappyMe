import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

class Review extends React.Component {
  render () {
    const { id, rating, review, reviewer, date } = this.props.review;
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
          <div id="date">
            <Rating initialRate={ rating }
                    empty={['fa fa-star-o fa-2x']}
                    full={['fa fa-star fa-2x']}
                    readonly
                    className="stars" />
            { date }
          </div>
          { review }
        </div>
      </article>
    )
  }
}

export default Review;
