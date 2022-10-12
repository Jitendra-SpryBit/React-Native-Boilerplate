/**
 * This file includes all the reducers under reducers directory,
 * Import all and add to combineReducers to use any among whole app
 */
import { combineReducers } from 'redux';
import { AuthState, HomeState, IAction } from '../types/IAction';

import auth from './auth';
import home from './home';

export interface RootState {
   auth: AuthState;
   home: HomeState;
}

export default combineReducers<RootState, IAction<any>>({
   auth, home
});
