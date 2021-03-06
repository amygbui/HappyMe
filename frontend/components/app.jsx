import React from 'react';
import GreetingContainer from './header/greeting_container';
import { Link } from 'react-router'

const App = ({ children, location }) => (
  <div className="app">
    <GreetingContainer location= {location.pathname} />
    { children }
  </div>
);

export default App;
