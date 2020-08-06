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