import React from 'react';

const Rating = ({ rating }) => {
  const stars = [];

  if (rating % 1 === 0) {
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<li key={ i }><img src={ window.images.gold_star } /></li>)
      } else {
        stars.push(<li key={ i }><img src={ window.images.silver_star } /></li>)
      };
    };
  } else {
    for (let i = 0.5; i < 5.5; i++) {
      if (i === rating ) {
        stars.push(<li key={ i }><img src={ window.images.half_star } /></li>);
      } else if (i < rating) {
        stars.push(<li key={ i }><img src={ window.images.gold_star } /></li>)
      } else {
        stars.push(<li key={ i }><img src={ window.images.silver_star } /></li>)
      }
    }
  };

  return (
    <div>
      <ul className="rating">
        { stars }
      </ul>
    </div>
  )
}

export default Rating;
