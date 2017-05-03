import React from 'react';
import { Router, Route ,IndexRoute} from 'dva/router';
import IndexPage from './routes/IndexPage';
import VideoPage from  './routes/LessonVideoPage'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'

import WelcomePage from './routes/WelcomePage'
import UnitListPage from './routes/UnitListPage'
import ReLogin from './routes/ReLoginPage'
import ProfilePage from './routes/ProfilePage'
import LessonUnitPage from './routes/LessonUnitPage'

import TopicUnitListPage from './routes/TopicUnitListPage'
import TopicDetailPage from './routes/TopicDetailPage'

import ReadingUnitListPage from './routes/ReadingUnitListPage'
import ReadingUnitPage from './routes/ReadingUnitPage'

import DiscussionUnitListPage from './routes/DiscussionUnitListPage'
import DiscussionDetailPage from './routes/DiscussionDetailPage'

import ModelUnitListPage from './routes/ModelUnitListPage'
import ModelDetailPage from './routes/ModelDetailPage'

import PublicationPage from './routes/PublicationPage'

import MyWritingUnitListPage from './routes/MyWritingUnitListPage'
import MyWritingDetailPage from './routes/MyWritingDetailPage'

import ConferenceListPage from './routes/ConferenceListPage'
import ConferenceDetailPage from './routes/ConferenceDetailPage'

import DiaryPage from './routes/DiaryPage'

import { message} from 'antd';
function RouterConfig({ history }) {
  message.config({
    top: 100,
    duration: 5,
  });
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />

      <Route path="lessons/units" component={UnitListPage}/>

      <Route path="lessons/units/unit1" component={LessonUnitPage}/>

      <Route path='lessons/units/unit1/videos/1' component={VideoPage}/>

      <Route path='login' component={LoginPage}/>

      <Route path='register' component={RegisterPage}/>

      <Route path='profile' component={ProfilePage}/>
      <Route path='welcome' component={WelcomePage}/>

      <Route path="expired" component={ReLogin}/>

      <Route path='topic/units' component={TopicUnitListPage}/>
      <Route path='topic/units/unit1' component={TopicDetailPage}/>

      <Route path="reading/units" component={ReadingUnitListPage}/>
      <Route path="reading/:unit/:book" component={ReadingUnitPage}/>


      <Route path="discussion/units" component={DiscussionUnitListPage}/>
      <Route path="discussion/units/:unit" component={DiscussionDetailPage}/>

      <Route path="model/units" component={ModelUnitListPage}/>
      <Route path="model/units/:unit" component={ModelDetailPage}/>

      <Route path="publication" component={PublicationPage}/>

      <Route path="my-writing/units" component={MyWritingUnitListPage}/>
      <Route path="my-writing/units/:unit" component={MyWritingDetailPage}/>

      <Route path="conferences" component={ConferenceListPage}/>
      <Route path="conferences/:unit" component={ConferenceDetailPage}/>

      <Route path="diary" component={DiaryPage}/>


    </Router>
  );
}

export default RouterConfig;
