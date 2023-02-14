import * as userApi from "../api/api";

export const signup = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });
    try {
        const { data } = await userApi.signup(formData);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../home", { replace: true });
    } catch (error) {
        console.log(error);
        dispatch({ type: "AUTH_FAIL" });
    }
};

export const login = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });
    try {
        const { data } = await userApi.login(formData);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../home", { replace: true });
    } catch (error) {
        console.log(error);
        dispatch({ type: "AUTH_FAIL" });
    }
};


export const logout = () => async (dispatch) => {
    dispatch({ type: "LOG_OUT" })
}
export const updateUser=(id, formData)=> async(dispatch)=> {
    dispatch({type: "UPDATING_START"})
    try{
        const {data} = await userApi.updateUser(id, formData);
        console.log("Updated",data)
        dispatch({type: "UPDATING_SUCCESS", data: data})
    }   
    catch(error){
        dispatch({type: "UPDATING_FAIL"})
    }
}
// export const updateUser = (id, formData) => async (dispatch) => {
//     dispatch({ type: "UPDATING_START" })
//     try {
//         const { data } = await api.updateUser(id, formData);
//         console.log("Update user action: ", data)
//         dispatch({ type: "UPDATING_SUCCESS", data: data })
//     }
//     catch (error) {
//         dispatch({ type: "UPDATING_FAIL" })
//     }
// };
