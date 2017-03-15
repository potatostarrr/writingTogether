import dva from 'dva';
import * as usersService from '../services/services';
import {browserHistory} from 'dva/router'
export default {
  namespace: 'try',
  state: {
    selectedMenu:null,
    token:null,
    username:'1',
    password:null,
    correct:false,
    coursesList:null,
    comments: null,
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
    'token'(state, {payload}){
      return {...state, token:payload.token, username:payload.username}
    },
    'coursesList'(state,{payload}){
      return {...state, coursesList:payload}
    },
    'menuClick'(state, {payload:selectedMenu}){
      return {...state, selectedMenu};
    },
    'comments'(state, {payload:comments}){
      return {...state, comments}
    }


  },
  effects:{
    //for this project, only accept object as payload, unload in each effects, then pack them in call function

    *register({payload},{call,put}){
      const res = yield call(usersService.register, payload);
      if(res.data){
        yield put({type:'token', payload:{...res.data, username:payload.username} });
        browserHistory.push('/courses');
      }
      else{
        console.log('Username already exist');
      }
    },

    *login({payload},{call,put}){
      const {data} = yield call(usersService.login,payload);
      if(data){
        yield put({
          type:'token',
          payload:{token: data.token, username:payload.username}
          }
        );
        browserHistory.push('/welcome');
      }
      else {
        console.log("incorrect password")
      }
        },

    *getCourseList({payload}, {call, put}){
      const {username, token} = payload;
      const res = yield call(usersService.getCourseList, {token,username});
      if(res.data) {
        const courses = res.data;
        yield put({type:'coursesList', payload:courses})
      }
      else {
        console.log('Token Invalid, Please Login Again');
      }
    },

    *checkToken({payload}, {call,put}){
      const rep = yield call()
    },

    *getComments({payload}, {call,put}){
      const {courseName} = payload;
      const rep = yield call(usersService.getComments, {courseName})
      if(rep.data){
        const comments = rep.data;
        yield put({type:'comments', payload:{comments}})
      }
      else {
        console.log('Bad Request, Can not get Comment Information');
      }
    }




  }
};
