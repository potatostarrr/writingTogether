import React from 'react';
import { Router, Route ,IndexRoute} from 'dva/router';
import IndexPage from './routes/IndexPage';
import VideoPage from  './routes/VideoPage'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'

import WelcomePage from './routes/WelcomePage'
import CourseListPage from './routes/CourseListPage'
import ReLogin from './routes/ReLoginPage'
import WritingPage from './routes/WritingPage'
import WritingSharePage from './routes/WritingSharePage'
import DiscussionBoardPage from './routes/DiscussionBoardPage'
import WritingConferencePage from './routes/WritingConferencePage'
import ProfilePage from './routes/ProfilePage'
import WritingTopicPage from './routes/WritingTopicPage'

import { message} from 'antd';
function RouterConfig({ history }) {
  message.config({
    top: 100,
    duration: 5,
  });
  return (
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={IndexPage} />
        <Route path='video/:courseName' component={VideoPage}/>

        <Route path='login' component={LoginPage}/>

        <Route path='register' component={RegisterPage}/>

        <Route path='profile' component={ProfilePage}/>

        <Route path='welcome' component={WelcomePage}/>

        <Route path="courses" component={CourseListPage}/>

        <Route path="expired" component={ReLogin}/>

        <Route path="teacher" component = {WritingSharePage}/>

        <Route path="peer" component={WritingSharePage}/>

        <Route path="writing" component={WritingPage}/>

        <Route path="discussions" component={DiscussionBoardPage}/>

        <Route path="conferences" component={WritingConferencePage}/>
      </Route>

      <Route path='topic'>
        <IndexRoute component={WritingTopicPage}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
