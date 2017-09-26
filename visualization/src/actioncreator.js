import {LOGGED_IN,USER_SYNCING,LOGIN_ERROR} from './actions';


export const loggedIn = (userId) => (dispatch, getState) => {
  dispatch({
    type: LOGGED_IN,
    userId: userId
  });
}

export const setRedirectUrl = (redirectUrl) => (dispatch) => {
    dispatch({
      type: SET_REDIRECT_URL,
      redirectUrl
    });
};

export const login = (code) => (dispatch, getState) => {
  let {user} = getState();
  if (user.isSyncing || user.isLoggedIn) {
    return Promise.resolve();
  }

  dispatch({ type: USER_SYNCING });
  return api.login(code).then(
    response => {
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
    type: INVALIDATE_STUDENT_PROFILE
  })
  dispatch({
    type: INVALIDATE_EXAMS
  })
  return api.logout().then(
    response => {
    },
    error => {
    }
  );
}
