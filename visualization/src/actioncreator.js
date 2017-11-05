
import {LOGGED_IN,USER_SYNCING,LOGIN_ERROR,SET_REDIRECT_URL,LOGGED_OUT,INVALIDATE_USER,SET_LOCATION_DATA,FETCH_DATA} from './actions';
import * as api from './api';

export const loggedIn = (userId) => (dispatch, getState) => {
  dispatch({
    type: LOGGED_IN,
    userId: userId
  });
  //setRedirectUrl('localhost:3000/user/:userId')
}

export const setRedirectUrl = (redirectUrl) => (dispatch) => {
    dispatch({
      type: SET_REDIRECT_URL,
      redirectUrl
    });
};

export const login = (username,password) => (dispatch, getState) => {
  let {user} = getState();
  if (user.isSyncing || user.isLoggedIn) {
    return Promise.resolve();
  }

  dispatch({ type: USER_SYNCING });
  return api.login(username,password).then(
    response => {
      //console.log('response');
      loggedIn(response)(dispatch, getState);
    },
    error => {
      apiErrorHandler(error,dispatch,LOGIN_ERROR);
    }
  );
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGGED_OUT
  });
  dispatch({
    type: INVALIDATE_USER
  })
  return api.logout().then(
    response => {
    },
    error => {
    }
  );
}

const apiErrorHandler = (error,dispatch,errorActionType) => {
  if(error.message === api.AUTH_FAILED) {
    logout()(dispatch);
  }
  dispatch({
    type: errorActionType,
    error: error.message === api.AUTH_FAILED ? '': error.message
  });
};
//
// export const barlocation = (dispatch,getState) => {
//   dispatch({
//     type: FETCH_DATA
//   });
//   api.getbarlocation().then(
//   response => dispatch({
//     type: SET_LOCATION_DATA,
//     data: response.locationdata
//   })
// );
// }
