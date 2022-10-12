import { ACTION_TYPES } from "../constants/actionTypes";
import { HomeState, IAction } from "../types/IAction";

const initialState: HomeState = {
    userList: [],
    errorMassage: {},
    jokes:""
};

export default function (state = initialState, action: IAction<any>) {
    switch (action.type) {
        case ACTION_TYPES.HOME.USER_LIST_FETCHED:
            return {
                ...state,
                userList: action.data
            };
        case ACTION_TYPES.HOME.USER_LIST_FAILED:
            return {
                ...state,
                errorMassage: action.data
            };

        case ACTION_TYPES.HOME.JOKES_RANDOM_FETCHED:
            return {
                ...state,
                jokes: action.data
            };

        case ACTION_TYPES.HOME.JOKES_RANDOM_FAILED:
            return {
                ...state,
                errorMassage: action.data
            };

        default:
            return state;
    }
}


