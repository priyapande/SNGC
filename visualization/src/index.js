import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import configureStore from './store';
import DashboardRoot from './pages/DashboardRoot';

const store = configureStore();

ReactDOM.render((
  <DashboardRoot store={store}/>
),document.getElementById('root'));
