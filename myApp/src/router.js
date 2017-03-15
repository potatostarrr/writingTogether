import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import VideoPage from  './routes/VideoPage'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'

import WelcomePage from './routes/WelcomePage'
import CourseListPage from './routes/CourseListPage'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />

      <Route path='/video' component={VideoPage}/>

      <Route path='/login' component={LoginPage}/>

      <Route path='/register' component={RegisterPage}/>


      <Route path='/welcome' component={WelcomePage}/>

      <Route path="/courses" component={CourseListPage}/>

    </Router>
  );
}

export default RouterConfig;
