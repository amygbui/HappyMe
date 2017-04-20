import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import GreetingContainer from './greeting/greeting_container'
import SessionFormContainer from './session/session_form_container';
import RestaurantContainer from './restaurant/restaurant_container'
import SplashContainer from './splash/splash_container'


const Root = ({ store }) => {
  const redirectUnlessLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/welcome")
    }
  }

  const redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace("/");
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ SplashContainer } />
        <Route path="/welcome" component={ App }>
          <Route path="/login"
                 component={ SessionFormContainer }
                 onEnter={ redirectIfLoggedIn }
            />
          <Route path="/signup"
                 component={ SessionFormContainer }
                 onEnter={ redirectIfLoggedIn }
            />
          <Route path="/search"
                component={ RestaurantContainer }
            />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
