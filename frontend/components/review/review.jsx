import React from 'react';
import { Link } from 'react-router';

import Rating from '../rating/rating';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { rating, review, reviewer } = this.props.review;
    // add in user for profile pic
    return (
      <article className="review">
        <div className="user">
          <img src={ reviewer.image_url } />
          <Link to={`/users/${reviewer.id}`}>{ reviewer.name }</Link>
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
// Review here!

export default Review;
