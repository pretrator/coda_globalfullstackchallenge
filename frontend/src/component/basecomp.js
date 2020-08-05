import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';
import {getusertoken} from "../actions/auth"
import {getlist} from "../actions/getlist"
import Top from "./top/top"
import Body from "./body"

const BaseComp=({
    token,
    loggedIn,
    loading,
    getusertoken,
    getlist,
})=>{
    useEffect(()=>{
        getusertoken();
        getlist();
    },[])
    
    if(loading){
        return <>
        <h3>Fetching token</h3>
        </>
    }
    return (<>
        <Top />
        <Body />
        </>
    );
}

BaseComp.propTypes = {
    getusertoken:PropTypes.func.isRequired,
}
const mapStateToProps=state=>({
    token:state.auth.token,
    loggedIn:state.auth.loggedIn,
    loading:state.auth.loading
})

export default connect(mapStateToProps,{getusertoken,getlist}) (BaseComp)