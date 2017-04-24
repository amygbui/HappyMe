import React from 'react';

import Review from './review';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchReviews(this.props.restaurantId);
  // }

  render () {
    const reviews = Object.values(this.props.reviews).map(review => {
      return(
        <Review key={ review.id }
                review={ review }
                fetchReview={ this.props.fetchReview } />
      )
    });

    return (
      <div>
        { reviews }
      </div>
    )
  }
};

export default ReviewIndex;
