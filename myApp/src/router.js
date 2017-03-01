import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MainPage from  './routes/MainPage'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import VideoPage from './routes/VideoPage'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />

      <Route path='/main' component={MainPage}/>

      <Route path='/login' component={LoginPage}/>

      <Route path='/register' component={RegisterPage}/>

      <Route path='/video' component={VideoPage}/>
    </Router>
  );
}

export default RouterConfig;
