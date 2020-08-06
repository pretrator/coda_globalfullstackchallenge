import axios from "axios"
import {
    GOT_USER_TOKEN,
    GET_USER_TOKEN
} from "./types"

export const getusertoken=()=>async dispatch=>{
    dispatch({
        type:GET_USER_TOKEN
    })
    const token=await axios.get("/gettoken").then((res)=>res.data.token)
    dispatch({
        type:GOT_USER_TOKEN,
        payload:{token}
    })
}