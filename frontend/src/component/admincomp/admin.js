import React,{useEffect} from 'react';
import BaseComp from "../basecomp"
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import {setadmintoken} from '../../actions/admin'
import {connect} from 'react-redux';

function Admin({setadmintoken,token}) {
    const hist=useHistory()
    useEffect(()=>{
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
    })
  return (
      <BaseComp />
  );
}


const mapStateToProps=state=>({
    token:state.admin.token,
})

export default connect(mapStateToProps,{setadmintoken}) (Admin)