import { ACTION_TYPES } from "../constants/actionTypes";
import { AppDispatch } from "../store";


export const loading = (b: boolean) => async (dispatch: AppDispatch) => {
    dispatch({ type: ACTION_TYPES.APP.APP_LOADING, data: b })
};

