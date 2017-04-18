import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="app">
    <h1>HappyMe</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
