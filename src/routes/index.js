import React from 'react';
import { Router as BrowserRouter, Route } from 'react-router-dom';

import history from '../utils/history';

import Home from './Home';
import TwitchCallback from './TwitchCallback';
import Dashboard from './Dashboard';
import BoxCreator from './BoxCreator';

export default function Router() {
  return (
    <BrowserRouter history={history}>
      <Route path='/' exact component={Home} />
      <Route path='/twitch-callback' exact component={TwitchCallback} />
      <Route path='/dashboard' exact component={Dashboard} />
      <Route path='/boxcreator' exact component={BoxCreator} />
    </BrowserRouter>
  );
}