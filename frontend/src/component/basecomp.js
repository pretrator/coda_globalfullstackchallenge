import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';
import {getusertoken} from "../actions/auth"
import auth from '../reducers/auth';

const BaseComp=({
    token,
    loggedIn,
    loading,
    getusertoken
})=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        console.log("adding")
        getusertoken()
    },[])
    const local=()=>localStorage.clear()
    return (<>
        <h1>{loading?"Loading":"Not Loading"}</h1>
        <h1>{loggedIn?"LoggedIn":"Not LoggedIn"}</h1>
        <h1>{token?token:"No token"}</h1>
        <button onClick={local} >sfsdfsdf</button>
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

export default connect(mapStateToProps,{getusertoken}) (BaseComp)