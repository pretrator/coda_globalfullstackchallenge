import axios from "axios"

export const castvote=(id)=>async dispatch=>{
        const data={
            token:localStorage.token,
            id:id
        }
        axios.post("/vote",data)
        .then((res)=>res.data)
        .then((res)=>{
            alert(res.msg)
        })

}