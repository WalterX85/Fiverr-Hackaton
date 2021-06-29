import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Forum from '../components/Forum';
import SignIn from './SignIn';
import SignUp from './SignUp';
import GraphicsDesin from './GraphicsDesin';
import DigitalMarketing from './DigitalMarketing';
import WrittingTranlation from './WrittingTranlation';
import ProgrammingTech from './ProgrammingTech';

import Home from './Home';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Router>
      <Forum />
      <Switch>
        {route('/', SignIn)}
        {route('/home', Home)}
        {route('/signup', SignUp)}
        {route('/graphicsdesign', GraphicsDesin)}
        {route('/digitalmarketing', DigitalMarketing)}
        {route('/writtingtranslation', WrittingTranlation)}
        {route('/programmingtech', ProgrammingTech)}
      </Switch>
    </Router>
  );
}

export default Routes;
