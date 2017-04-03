import dva from 'dva';
import * as usersService from '../services/services';
import {browserHistory} from 'dva/router'
import cookie from 'react-cookie';
import { message} from 'antd';
export default {
  namespace: 'try',
  state: {
    selectedMenu:null,
    username:null,
    profile:{},
    coursesList:[],
    searchedCoursesList:[],
    comments:null,
    currentLocation:'Home',
    currentCommentsPage: 1,
    currentCoursesPage:1,
    logged:false,
  },
  reducers: {
    //in this project, all payload in reducer should be unloaded in parameter
    //need refactor. all payload should be object
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'username'(state, { payload}){
      return {...state, username:payload}
    },
    'coursesList'(state,{payload}){
      const {courses} = payload;
      return {...state, coursesList:courses, searchedCoursesList:courses};
    },
    'searchCoursesList'(state,{payload}){
      const {courses} = payload;
      return {...state,searchedCoursesList:courses};
    },
    'menuClick'(state, {payload:{selectedMenu, currentLocation}}){
      return {...state, selectedMenu, currentLocation};
    },
    'comments'(state, {payload}){
      const {comments} = payload;
      return {...state, comments};
    },
    'changeCommentsPage'(state,{payload}){
      const {currentCommentsPage} = payload;
      return {...state, currentCommentsPage};
    },
    'changeCoursesPage'(state,{payload}){
      const {currentCoursesPage} = payload;
      return {...state, currentCoursesPage}
    },
    'profile'(state, {payload}){
      const {profile} = payload;
      return {...state, profile};
    },
    'logged'(state, {payload}){
      const {logged} = payload;
      return {...state, logged};
    },
  },
  effects:{
    //for this project, only accept object as payload, unload in each effects, then pack them in call function

    *register({payload},{call,put}){
      try {
        const {data} = yield call(usersService.register, payload);
        cookie.save('token', data.token, { path: '/' });
        browserHistory.push('/welcome');
      }
      catch(e) {
        message.error('UserName already taken');
      }
    },

    *login({payload},{call,put}){
      try{
        //window.sessionStorage.setItem('token',data.token);
        const {data} = yield call(usersService.login,payload);
        cookie.save('token', data.token, { path: '/' });
        browserHistory.push('/welcome');
      }
      catch (err){
        message.error('Invalid Username/Incorrect Password');
      }
    },

    *getCourseList({payload}, {call, put}){
      const res = yield call(usersService.getCourseList, {});
      if(res.data) {
        const courses = res.data;
        yield put({type:'coursesList', payload:{courses}});
      }
      else {
        console.log('Token Invalid, Please Login Again');
      }
    },

    *getComments({payload}, {call,put}){
      const {courseName} = payload;
      const rep = yield call(usersService.getComments, {courseName});
      if(rep.data){
        const comments = rep.data;
        yield put({type:'comments', payload:{comments}})
      }
      else {
        console.log('Bad Request, Can not get Comment Information');
      }
    },

    *postComment({payload}, {call, put}){
      const {courseName, content} = payload;
      const rep = yield call(usersService.postComment, {courseName,content});
      if(rep.data){
        const comments = rep.data;
        yield put({type:'comments', payload:{comments}})
      }
      else {
        console.log('Bad Request, Can not get Comment Information');
      }
    },

    *getProfile({payload}, {call,put}){
      const rep = yield call(usersService.getProfile, {});
      if(rep.data){
        const profile = rep.data;
        yield put({type:'profile', payload:{profile}});
      }
    },

    *tokenCheck({payload},{call,put}){
      try{
        yield call(usersService.tokenCheck, payload);
        put({type:'logged',payload:{logged:true}});
      }
      catch(err) {
        put({type:'logged',payload:{logged:false}});
      }
    }

  }
};
