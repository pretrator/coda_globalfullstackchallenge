import axios from "axios"
import {
    GOT_LIST,
    GET_LIST
} from "./types"

export const getlist=()=>async dispatch=>{
    dispatch({
        type:GET_LIST
    })
    const list=await axios.get("/gettoken/getlis").then((res)=>res.data)
    dispatch({
        type:GOT_LIST,
        payload:{list}
    })
}