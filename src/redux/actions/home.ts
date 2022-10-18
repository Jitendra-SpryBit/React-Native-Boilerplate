import API from "../../services/api";
import { ACTION_TYPES } from "../constants/actionTypes";
import config from "../../config";
import { AppDispatch } from "../store";
import { encodedString } from "../../utils/Halper";



export const getUserList = (params: object) => async (dispatch: AppDispatch) => {
    const data = await API.get(config.apis.userList, encodedString(params))
    const response: any = await data.json()
    if (data.status === 200) {
        dispatch({ type: ACTION_TYPES.HOME.USER_LIST_FETCHED, data: response })
    } else if (data.status === 400) {
        dispatch({ type: ACTION_TYPES.HOME.USER_LIST_FAILED, data: response.error })
    } else {
        dispatch({ type: ACTION_TYPES.HOME.USER_LIST_FAILED, data: response.error })
    }
};

export const getRandomJoks = () => async (dispatch: AppDispatch) => {
    const data = await API.get('https://indian-jokes-api.herokuapp.com/jokes/random',"")
    const response: any = await data.json()
    if (data.status === 200) {
        dispatch({ type: ACTION_TYPES.HOME.JOKES_RANDOM_FETCHED, data: response })
    } else if (data.status === 400) {
        dispatch({ type: ACTION_TYPES.HOME.JOKES_RANDOM_FAILED, data: response.error })
    } else {
        dispatch({ type: ACTION_TYPES.HOME.JOKES_RANDOM_FAILED, data: response.error })
    }
};

