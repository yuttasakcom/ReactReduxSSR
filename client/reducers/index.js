import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import authReducer from './authReducer'

export default combineReducers({
  todos: todoReducer,
  auth: authReducer
})