import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from './pages/Home';

function Routes() {
  return (
    <Switch>
      <Route
        path="/home"
        component={Home}
        exact />
      <Redirect
        from="/"
        to="/home" />
    </Switch>
  );
}

export default Routes;
