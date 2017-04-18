import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => {
  const redirectUnlessLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/login")
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
        <Route path="/" component={ App }>
          <Route path="/login"
                 component={ SessionFormContainer }
                 onEnter={ redirectIfLoggedIn }
            />
          <Route path="/signup"
                 component={ SessionFormContainer }
                 onEnter={ redirectIfLoggedIn }
            />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
