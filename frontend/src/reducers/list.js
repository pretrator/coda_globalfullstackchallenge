import {
    GET_LIST,
    GOT_LIST
} from "../actions/types"


const initialState={
    hackers:[],
    loading:false,
};

export default function(state=initialState,action){
    const{type,payload}=action;
    switch(type){
        case GET_LIST:
            return {
                ...state,
                loading:true,
            };
        case GOT_LIST:
            return {
                hackers:payload.list,
                loading:false,
            }
        default:
            return state
    }
}