import {createStore} from 'redux';
import UserReducer from './reudcers/UserReducers';

let store = createStore(UserReducer);