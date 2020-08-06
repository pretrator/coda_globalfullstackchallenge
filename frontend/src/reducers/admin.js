import {
    SET_ADMIN_TOKEN
} from "../actions/types"


const initialState={
    admintoken:null,
};

export default function(state=initialState,action){
    const{type,payload}=action;
    switch(type){
        case SET_ADMIN_TOKEN:
            return {
                ...state,
                admintoken:payload.token
            };
        default:
            return state
    }
}