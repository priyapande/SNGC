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
};

export const logout = () => {
  cookie.remove('userId', { path: '/' });
}

export const getbarlocation = (userId) => {
  return new Promise((resolve, reject) => {
    request.get('http://18.221.150.85/density-api')
    .set('Content-Type', 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'http://localhost:3000','Access-Control-Allow-Credentials':'true')
    .end(function(err,res) {
      baseResponseHandler(err, res, reject, () => {
        console.log(res);
        resolve(res.body.data);
      })
    });
  });
}

export const getuserStrength = (userId) => {
  return new Promise((resolve, reject) => {
    request.get('http://18.221.150.85/group-strength-api/'+userId)
    .set('Content-Type', 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'http://localhost:3000','Access-Control-Allow-Credentials':'true')
    .end(function(err,res) {
      baseResponseHandler(err, res, reject, () => {
        console.log(res);
        resolve(res.body.data);
      })
    })
  })
}

export const getgenderRatio = () => {
  return new Promise((resolve, reject) => {
    request.get('http://18.221.150.85/gender-api/')
    .set('Content-Type', 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'http://localhost:3000','Access-Control-Allow-Credentials':'true')
    .end(function(err,res) {
      baseResponseHandler(err, res, reject, () => {
        console.log(res);
        resolve(res.body.data);
      })
    })
  })
}

export const getgroupRatio = (userId) => {
  return new Promise((resolve, reject) => {
    request.get('http://18.221.150.85/user-groups-api/'+userId)
    .set('Content-Type', 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'http://localhost:3000','Access-Control-Allow-Credentials':'true')
    .end(function(err,res) {
      baseResponseHandler(err, res, reject, () => {
        console.log(res);
        resolve(res.body.data);
      })
    })
  })
}
