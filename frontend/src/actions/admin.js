import axios from "axios"
import {getlist} from "../actions/getlist"
import {
    SET_ADMIN_TOKEN
} from "./types"

export const setadmintoken=(token)=>async dispatch=>{
    dispatch({
        type:SET_ADMIN_TOKEN,
        payload:{token}
    })
}

export const deleteid=(id,token)=>async dispatch=>{
    axios.post("/api/del",{token:token,id:id})
    .then((res)=>{
        alert(res.data.msg)
    })
    dispatch(getlist())
}

export const addnew=(token)=>async dispatch=>{
    axios.post("/api/add",{token:token,name:prompt("Provide name of new hacker")})
    .then((res)=>{
        alert(res.data.msg)
    })
    dispatch(getlist())
}