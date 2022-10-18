import { ACTION_TYPES } from "../constants/actionTypes";
import { AppDispatch } from "../store";

export const showHideLoader = (params: boolean, dispatch: AppDispatch) => {
       dispatch({ type: ACTION_TYPES.APP.APP_LOADING, data: params })
};

export const isNetworkAvailable = (params: boolean)=>( dispatch: AppDispatch) => {
       dispatch({ type: ACTION_TYPES.APP.NETWORK, data: params })
};

