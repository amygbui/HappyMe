import React from 'react';

import Review from './review';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const reviews = Object.values(this.props.reviews).map(review => {
      if (review.restaurant_id === this.props.restaurantId) {
        return(
          <Review key={ review.id }
            review={ review }
            currentUser={ this.props.currentUser }
            fetchReview={ this.props.fetchReview } />
        )
      }
    });

    return (
      <div>
        { reviews }
      </div>
    )
  }
};

export default ReviewIndex;
