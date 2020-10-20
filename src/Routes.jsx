import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Albums from './pages/Albums';

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
        exact
        path="/albums"
        component={Albums} />
      {/* put at end to not do a infinite loop of redirects */}
      <Redirect
        from="/"
        to="/home" />
    </Switch>
  );
}

export default Routes;
