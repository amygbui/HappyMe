import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SplashContainer from './splash/splash_container';
import GreetingContainer from './greeting/greeting_container'
import SessionFormContainer from './session/session_form_container';
import RestaurantSearchContainer from './restaurant/preview/restaurant_search_container';
import RestaurantShowContainer from './restaurant/show/restaurant_show_container';
import ReviewFormContainer from './review/form/review_form_container';
import UserProfile from './user_profile/user_profile';

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
          <Route path="/restaurants/:restaurantId"
                 component={ RestaurantShowContainer }
            />
          <Route path="/restaurants/:restaurantId/review/new"
                 component={ ReviewFormContainer }
                 onEnter={ redirectUnlessLoggedIn }
            />
          <Route path="/restaurants/:restaurantId/review/edit/:reviewId"
                 component={ ReviewFormContainer }
                 onEnter={ redirectUnlessLoggedIn }
            />
          <Route path="/users/:userId" component={ UserProfile }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
