import {combineReducers} from 'redux';
import {users, usersHasError, usersIsLoading} from './UserReducers'

export default combineReducers({
  users,
  usersHasError,
  usersIsLoading
})