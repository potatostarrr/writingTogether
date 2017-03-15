import request from '../utils/request';

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
// export async function getCourseList(body) {
//   const {token} = body;
//   return request('/api/courses',{
//     method: 'GET',
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "jwt "+token,
//     },
//   })
// }

//just for test, using username get list
export async function getCourseList(body) {
  const {token,username} = body;
  return request('/api/courses',{
    method: 'POST',
    body:JSON.stringify({'username':username}),
    headers: {
      "Content-Type": "application/json",
      //"Authorization": "jwt "+token,
    },
  })
}

//get comments for a course video
export async function getComments(body) {
  const {courseName} = body;
  return request('/api/course/comments',{
    method: 'POST',
    body: JSON.stringify({courseName:courseName}),
    headers:{
      "Content-Type": "application/json",
    },
  })
}
