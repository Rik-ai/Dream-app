import  { combineReducers } from 'redux'
import authReducer from './auth'
import posts from './post'

export default combineReducers({
    posts,
    authReducer
})