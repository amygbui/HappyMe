import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { rating, review, reviewer } = this.props.review;
    // add in user for profile pic
    return (
      <article>
        <div>
          { reviewer.name }
        </div>
        <div>
          { rating }
        </div>
        <div>
          { review }
        </div>
      </article>
    )
  }
}
// Review here!

export default Review;
