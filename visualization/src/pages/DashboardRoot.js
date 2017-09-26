import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import UserProfile from './UserProfile';
import EnsureLoggedInContainer from './EnsureLoggedInContainer'

import App from '../App';

const DashboardRoot = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}> </Route>
      <Route component={EnsureLoggedInContainer}>
        <IndexRoute component={UserProfile}/>
      </Route>
    </Router>
  </Provider>
);

export default DashboardRoot;
