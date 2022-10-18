/**
 * This file includes all the reducers under reducers directory,
 * Import all and add to combineReducers to use any among whole app
 */
import { combineReducers } from 'redux';
import { AuthState, HomeState, IAction,AppState } from '../types/IAction';

import auth from './auth';
import home from './home';
import app from './app';

export interface RootState {
   app: AppState;
   auth: AuthState;
   home: HomeState;
}

export default combineReducers<RootState, IAction<any>>({
   app, auth, home
});
