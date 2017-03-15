import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

function parseErrorMessage(err) {
  console.log('im here')
  //console.log(err);
  //console.log({err:err, message: err.responseJSON});
  // const { status, message } = data;
  // if (status === 'error') {
  //   throw new Error(message);
  // }
  // return { data };
}

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => {err});
    //.catch(parseErrorMessage);
}

