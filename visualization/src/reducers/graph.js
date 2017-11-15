import { FETCH_DATA, SET_LOCATION_DATA,INVALIDATE_DATA,SET_USER_STRENGTH,
SET_GENDER_RATIO,SET_GROUP_RATIO } from "../actions"

const graph = (state = {
  isFetching:false,
  didInvalidate: false,
  location:"",
  userStrength:"",
  genderRatio:"",
  groupRatio:"",
  error: ""
  }, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true,
      }
    case SET_LOCATION_DATA:
      return {
        ...state,
        isFetching:false,
        location: action.data,
      }
    case SET_USER_STRENGTH:
    return {
      ...state,
      isFetching:false,
      userStrength:action.data
    }
    case SET_GENDER_RATIO:
    return {
      ...state,
      isFetching:false,
      genderRatio:action.data
    }
    case SET_GROUP_RATIO:
    return {
      ...state,
      isFetching:false,
      groupRatio:action.data
    }
    case INVALIDATE_DATA:
      return {
        ...state,
        didInvalidate: true
      }
    default:
      return state;
  }
};

export default graph;
