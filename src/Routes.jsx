import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Albums from './pages/Albums';

function Routes() {
  return (
    <Switch>
      <Route
        path="/home"
        component={Home}
        exact />
      <Route
        path="/posts"
        component={Posts} />
      <Route
        path="/albums"
        component={Albums}
        exact />
      <Redirect
        from="/"
        to="/home" />
    </Switch>
  );
}

export default Routes;
