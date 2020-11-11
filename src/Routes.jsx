import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Albums from './pages/Albums';
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';

function Routes() {
  return (
    <Switch>
      {/* exact flag renders component is the path is in url */}
      <Route
        exact
        path="/home"
        component={Home} />
      {/* don't use exact if has sub paths */}
      <Route
        path="/posts"
        component={Posts} />
      <Route
        path="/albums"
        component={Albums} />
      <Route
        path="/users/:userId"
        component={User} />
      {/* if path from is exact redirect to new path */}
      <Redirect
        exact
        from="/"
        to="/home" />
      {/* put at end because it doesn't find the path this will be taken
        if not define path prop will render for routes unknowed
        too can define this behavior with path="*" */}
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
