import { ACTION_TYPES } from "../constants/actionTypes";
import { AuthState, IAction } from "../types/IAction";

const initialState: any = {
    isLoading: false,
  
};

export default function (state = initialState, action: IAction<any>) {
    switch (action.type) {
        case ACTION_TYPES.APP.APP_LOADING:
            return {
                ...state,
                isLoading: action.data
            };
        default:
            return state;
    }
}


