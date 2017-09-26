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

export const login = (code) =>{
  return new Promise((resolve, reject) => {
  request.post('/api/v1/studentplus/login/')
         .send({code})
         .end(function(err, res) {
            baseResponseHandler(err, res, reject, () => {
              resolve(res.body.user_id);
              cookie.save('userId', res.body.user_id, { path: '/' });
            });
          });
  });
};

export const logout = (code) =>{
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
