import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import GraphicsDesin from './GraphicsDesin';
import DigitalMarketing from './DigitalMarketing';
import WrittingTranlation from './WrittingTranlation';
import ProgrammingTech from './ProgrammingTech';
import Profile from './Profile';
import Home from './Home';
import Question from './Question';
import QuestionForm from './QuestionForm';
import Forum from './Forum';

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
        {route('/forum', Forum)}
        {route('/questions/create', QuestionForm)}
        {route('/questions/:id', Question)}
      </Switch>
    </Router>
  );
}

export default Routes;
