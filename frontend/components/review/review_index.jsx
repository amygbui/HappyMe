import React from 'react';

import Review from './review';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const reviews = this.props.reviews.map(review => {
      return(
        <Review key={ review.id }
                review={ review }
                fetchReview={ this.props.fetchReview } />
      )
    });

    return (
      { reviews }
    )
  }
};

export default ReviewIndex;
