import { combineReducers } from 'redux'
import user from './user'
import graph from './graph'
const rootReducer = combineReducers({
  user,graph
})

export default rootReducer;
