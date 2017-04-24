import React from 'react';

const Rating = ({ rating }) => {
  const stars = [];

  if (rating) {
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<li key={ i }><img src={ window.images.gold_star } /></li>)
      } else {
        stars.push(<li key={ i }><img src={ window.images.silver_star } /></li>)
      };
    };
  } else {

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
