import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link } from 'react-router'

const App = ({ children }) => (
  <div className="app">
    <GreetingContainer />
    { children }
  </div>
);

export default App;
