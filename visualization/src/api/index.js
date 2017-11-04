import request from 'superagent';
import cookie from 'react-cookie';
export const AUTH_FAILED = 'AUTH_FAILED';
const INTERNET_ERROR_MESSAGE = 'Not able to connect. Please check your internet connection.'

const baseResponseHandler = (err, res, reject, successCallBack) => {
  if(err) {
    if(err.status === 403) {
      cookie.remove('userId', { path: '/' });
      reject({message: AUTH_FAILED});
      return;
    }
    else if(err.status === 502){
      reject({message: INTERNET_ERROR_MESSAGE});
      return;
    }
  }
  if(res.body.error_code) {
    reject({message: res.body.error_message});
    return;
  }
  successCallBack();
}

export const login = (username,password) => {
  return new Promise((resolve, reject) => {
    console.log(username,password);
  let headers = new Headers();
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  request.post('http://18.221.150.85/login')
  .set('Content-Type', 'application/x-www-form-urlencoded',headers)
  .send({ username: username, password: password })
  .end();
});

  // request.post('http://18.221.150.85/login')
  //        .send({username,password})
  //        .end();
  // });
};

export const logout = (code) => {
  cookie.remove('userId', { path: '/' });
  return new Promise((resolve, reject) => {
    request.get('/api/v1/studentplus/logout/')
          .end(function(err, res) {
             baseResponseHandler(err, res, reject, () => {
               resolve(res.body);
             });
           });
  });
}
