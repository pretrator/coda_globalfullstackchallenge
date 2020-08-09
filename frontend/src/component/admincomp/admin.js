import React,{useEffect} from 'react';
import BaseComp from "../basecomp"
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import {setadmintoken} from '../../actions/admin'
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"
  

function Admin({setadmintoken,token}) {
    const hist=useHistory()
    useEffect(()=>{
        if(token===null){
        alert(" Copy this access token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc2ciOiJhZG1pbiJ9.mL5bY6PNUKSB2vZEkbASBp7BAH6ZpgILz2b2AyJ9aFU")
        const token=prompt("Please provide admin token");
        axios.post("api/isgood",{token:token})
        .then((res)=>{
            alert(res.data.msg)
            setadmintoken(token)
        })
        .catch(()=>{
            alert("Failed auth")
            hist.goBack()
        })
    }
})

  return (
        
      <BaseComp />
  );
}


const mapStateToProps=state=>({
    token:state.admin.admintoken,
})

export default connect(mapStateToProps,{setadmintoken}) (Admin)
