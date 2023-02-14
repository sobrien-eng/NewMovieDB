//import * as actionType from '../constants/actionTypes';

const userReducer = (state = { userData: null, loading: false, error: false, updateLoading: false }, action) => {
    switch (action.type) {
        case "AUTH_START":
            return { ...state, loading: true, error: false };
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

            return { ...state, userData: action.data, loading: false, error: false };
        case "AUTH_FAIL":
            return { ...state, loading: false, error: true };
        case "UPDATING_START":
            return { ...state, updateLoading: true, error: false }
        case "UPDATING_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            return { ...state, userData: action.data, updateLoading: false, error: false }


        case "UPDATING_FAIL":
            return { ...state, updateLoading: true, error: true }

        // case actionType.UPDATE_USER:
        //     return {};

        // case actionType.START_LOADING:
        //     return {};
        // case actionType.END_LOADING:
        //     return {};


        case "LOGOUT":
            localStorage.clear();
            return { ...state, userData: null, loading: false, error: false, updateLoading: false }

        default:
            return state;
    }
};
//log

export default userReducer;