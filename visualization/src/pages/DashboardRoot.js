import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import UserProfile from './UserProfile';
import LoginModel from '../LoginModel'
import App from '../App';

const DashboardRoot = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <Route path="/login" component={LoginModel} />
      <Route path="/user/:userId" component={UserProfile} />
      </Route>
    </Router>
  </Provider>
);

export default DashboardRoot;
