import { LOGGED_IN, LOGGED_OUT, SET_REDIRECT_URL, INVALIDATE_USER, USER_SYNCING, LOGIN_ERROR} from "../actions"

const user = (state = {
  isLoggedIn: false,
  isSyncing:false,
  redirectUrl: "",
  didInvalidate: false,
  userId: "",
  error: ""
  }, action) => {
  switch (action.type) {
    case USER_SYNCING:
      return {
        ...state,
        isSyncing: true,
      }
    case LOGGED_IN:
      return {
        ...state,
        isSyncing:false,
        isLoggedIn: true,
        userId: action.userId,
      }
    case LOGGED_OUT:
      return {
        ...state,
        isSyncing:false,
        isLoggedIn: false,
        redirectUrl: ""
      }
    case SET_REDIRECT_URL:
        return {
          ...state,
          redirectUrl: action.redirectUrl
        }
    case INVALIDATE_USER:
      return {
        ...state,
        isLoggedIn: false,
        redirectUrl: "",
        didInvalidate: true
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isSyncing: false,
        isLoggedIn: false,
        userId: "",
        didInvalidate: false,
        error: action.error
      }
    default:
      return state;
  }
};

export default user;
