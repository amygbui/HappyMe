import React from 'react';

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
          { reviewer.name }
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
