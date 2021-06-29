import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Question from '../components/Question';
import QuestionList from '../components/QuestionList';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Router>
      <Switch>
        {route('/', SignIn)}
        {route('/home', Home)}
        {route('/signup', SignUp)}
        {route('/questions', QuestionList)}
        {route('/questions/:id', Question)}
      </Switch>
    </Router>
  );
}

export default Routes;
