import request from 'superagent';
import Cookies from 'universal-cookie';
export const AUTH_FAILED = 'AUTH_FAILED';
const INTERNET_ERROR_MESSAGE = 'Not able to connect. Please check your internet connection.'
const cookie = new Cookies();

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

  request.post('http://18.221.150.85/login')
  .set('Content-Type', 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'http://localhost:3000','Access-Control-Allow-Credentials':'true')
  .send({ username: username, password: password })
  .end(function(err, res) {
     baseResponseHandler(err, res, reject, () => {
       //console.log(res.body.user_id)
       resolve(res.body.user_id);
       cookie.set('userId', String(res.body.user_id), { path: '/' });
       //console.log(cookie);
     });
   });

});

  // request.post('http://18.221.150.85/login')
  //        .send({username,password})
  //        .end();
  // });
};

export const logout = () => {
  cookie.remove('userId', { path: '/' });
}
