import { Action } from 'redux';

export interface IAction<T> extends Action {
  data?: T;
  type: string;
}

export interface AuthState {
  loggedIn: boolean;
  isAppLaunch: boolean;
  user: any,
  errorMassage: Record<string, string>
}

export interface HomeState {
  userList: Record<string, any>[];
  errorMassage: Record<string, string>
  jokes: string
}

export interface AppState {
  isLoading: boolean;
  isNetworkAvailable: boolean | undefined
}


