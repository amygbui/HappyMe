import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReview(this.props.review.id);
  }

  render () {
    const { rating, review } = this.props
    // add in user for profile pic

    return (
      <div>
        { rating }
        { review }
      </div>
    )
  }
}
// Review here!

export default Review;
