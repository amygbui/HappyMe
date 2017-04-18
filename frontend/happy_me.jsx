import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

const store = configureStore();
window.store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  ReactDOM.render(<h1>Welcome to HappyMe</h1>, root)
})
