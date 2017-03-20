import { combineReducers } from 'redux';
import * as albumReducer from './albums'

export default combineReducers(Object.assign(
    albumReducer
));
