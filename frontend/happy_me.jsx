import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store'
import Root from './components/root'

// import { fetchRestaurant, fetchRestaurants } from './actions/restaurant_actions';
// import { fetchReviews } from './actions/review_actions';

// let store;
// if (window.currentUser) {
//   const preloadedState = { session: { currentUser: window.currentUser } };
//   store = configureStore(preloadedState);
// } else {
//   store = configureStore();
// }
// window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={ store } />, root);
});
