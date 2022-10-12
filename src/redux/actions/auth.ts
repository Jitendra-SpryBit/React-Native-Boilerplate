import API from "../../services/api";
import { ACTION_TYPES } from "../constants/actionTypes";
import { RootState } from "../reducers";
import config from "../../config";
import { AppDispatch } from "../store";


export const splashLunached = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch({type: ACTION_TYPES.SPLASH.SPLASH_LAUNCHED})
};

export const loginUser = (params:any) => async (dispatch: AppDispatch, getState: () => RootState) => {    
    const data = await API.post(config.apis.login,params)
    const response:any=await data.json()    
    if (data.status===200) {
        dispatch({type: ACTION_TYPES.LOGIN.LOGIN_SUCCESS, data:{}})
        dispatch({type: ACTION_TYPES.LOGIN.LOGIN_DATA_FETCHED, data:response})
    }else if (data.status===400) {
        dispatch({type: ACTION_TYPES.LOGIN.LOGIN_FAILED, data:response.error})
    }else {
        dispatch({type: ACTION_TYPES.LOGIN.LOGIN_FAILED, data:response.error})
    }
};