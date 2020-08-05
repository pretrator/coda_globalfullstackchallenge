import {
    GET_USER_TOKEN,
    GOT_USER_TOKEN,
} from "../actions/types"


const initialState={
    token:null,
    loggedIn:false,
    loading:false,
};

export default function(state=initialState,action){
    const{type,payload}=action;
    switch(type){
        case GET_USER_TOKEN:
            return {
                ...state,
                loading:true,
            };
        case GOT_USER_TOKEN:
            localStorage.setItem("token",payload.token)
            return {
                token:payload.token,
                loading:false,
                loggedIn: true
            }
        
        default:
            return state
    }
}