import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import GreetingContainer from './greeting/greeting_container'
import SessionFormContainer from './session/session_form_container';
import BusinessContainer from './business/business_container'
import Splash from './splash/splash'


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

  // <IndexRoute component={ GreetingContainer } />
  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ Splash } />
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
                component={ BusinessContainer }
            />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
