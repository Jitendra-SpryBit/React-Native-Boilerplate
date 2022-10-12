import { ACTION_TYPES } from "../constants/actionTypes";
import { AuthState, IAction } from "../types/IAction";

const initialState: AuthState = {
    loggedIn: false,
    isAppLaunch:true,
    user: {},
    errorMassage:{}
};

export default function (state = initialState, action: IAction<any>) {
    switch (action.type) {
        case ACTION_TYPES.SPLASH.SPLASH_LAUNCHED:
            return {
                ...state,
                isAppLaunch: false
            };
        case ACTION_TYPES.LOGIN.LOGIN_DATA_FETCHED:
            return {
                ...state,
                user: action.data
            };
            case ACTION_TYPES.LOGIN.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                errorMassage:action.data
            };
            case ACTION_TYPES.LOGIN.LOGIN_FAILED:
            return {
                ...state,
                loggedIn: false,
                errorMassage:action.data

            };
        default:
            return state;
    }
}


