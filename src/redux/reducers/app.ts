import { ACTION_TYPES } from "../constants/actionTypes";
import { AppState, IAction } from "../types/IAction";

const initialState: AppState = {
    isLoading: false,
    isNetworkAvailable: undefined
};

export default function (state = initialState, action: IAction<any>) {
    switch (action.type) {
        case ACTION_TYPES.APP.APP_LOADING:
            return {
                ...state,
                isLoading: action.data
            };
        case ACTION_TYPES.APP.NETWORK:
            return {
                ...state,
                isNetworkAvailable: action.data
            };
        default:
            return state;
    }
}


