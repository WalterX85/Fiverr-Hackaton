import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Router>
      <Switch>
        {route('/', SignIn)}
        {route('/home', Home)}
        {route('/signup', SignUp)}
      </Switch>
    </Router>
  );
}

export default Routes;
