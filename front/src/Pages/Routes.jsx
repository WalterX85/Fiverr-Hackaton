import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Forum from '../components/Forum';
import SignUp from './SignUp';
import GraphicsDesin from './GraphicsDesin';
import DigitalMarketing from './DigitalMarketing';
import WrittingTranlation from './WrittingTranlation';
import ProgrammingTech from './ProgrammingTech';
import Profile from './Profile';
import Home from './Home';
import Question from '../components/Question';
import QuestionList from '../components/QuestionList';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Router>
      <Switch>
        {route('/', Profile)}
        {route('/home', Home)}
        {route('/signup', SignUp)}
        {route('/graphicsdesign', GraphicsDesin)}
        {route('/digitalmarketing', DigitalMarketing)}
        {route('/writtingtranslation', WrittingTranlation)}
        {route('/programmingtech', ProgrammingTech)}
        {route('/questions', QuestionList)}
        {route('/questions/:id', Question)}
        {route('/forum', Forum)}
      </Switch>
    </Router>
  );
}

export default Routes;
