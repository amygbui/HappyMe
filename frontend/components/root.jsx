import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SplashContainer from './splash/splash_container';
import GreetingContainer from './greeting/greeting_container'
import SessionFormContainer from './session/session_form_container';
import RestaurantSearchContainer from './restaurant/preview/restaurant_search_container';
import RestaurantShowContainer from './restaurant/show/restaurant_show_container';


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
                component={ RestaurantSearchContainer }
            />
        </Route>
      </Router>
    </Provider>
  );
};
// <Rout path="/restaurants/:restaurantId"
//   component={ RestaurantShowContainer }
//   />

export default Root;
