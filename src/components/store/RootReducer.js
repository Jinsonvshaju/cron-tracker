import { combineReducers } from 'redux';
import { UserReducer } from './user/UserReducer';

export const RootReducer = combineReducers({
    user:UserReducer,

});