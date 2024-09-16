import { LOGOUT, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"

const initialState = {
    user:null,
    loading:false,
    error:null,
    jwt:localStorage.getItem("jwt") || null
}

const authReducer = (state=initialState,action) => {
    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state,loading:true,error:null}
        
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("jwt", action.payload);
            return {...state,loading:false,error:null,jwt:action.payload}

        case GET_USER_SUCCESS:
            return {...state,user:action.payload,loading:false,error:null}

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return {...state,loading:false,error:action.payload}

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}

export default authReducer;