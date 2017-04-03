import request from '../utils/request';
import cookie from 'react-cookie';

export async function query() {
  return request('/api/users');
}

export async function login(body) {
  return request('/api/api-token-auth/',{
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    },
  })
}

export async function register(body) {
  return request('/api/register',{
    method:'POST',
    body:JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })

}


//using  token to get user directly
export async function getCourseList(body) {
  //token = window.sessionStorage.getItem('token');
  const token = cookie.load('token');
  return request('/api/courses',{
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "jwt "+token,
    },
  })
}

//get comments for a course video
export async function getComments(body) {
  const {courseName} = body;
  const token = cookie.load('token');
  return request('/api/course/comments',{
    method: 'POST',
    body: JSON.stringify({courseName:courseName}),
    headers:{
      "Content-Type": "application/json",
      "Authorization": "jwt "+token,
    },
  })
}

//post  comment(for test, use user)
export async function postComment(body) {
  const {courseName, content} = body;
  const token = cookie.load('token');
  return request('/api/course/post/comment',{
    method:'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "jwt "+token,
    },
    body: JSON.stringify({courseName, content}),
  })
}

export async function getProfile() {
  const token = cookie.load('token');
  return request('/api/profile',{
    method:'GET',
    headers:{
      "Content-Type": "application/json",
      "Authorization": "jwt "+token,
    },
  })
}

export async function tokenCheck() {
  const token = cookie.load('token');
  return request('api/api-token-verify/',{
    method:'POST',
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({token}),
  })

}

