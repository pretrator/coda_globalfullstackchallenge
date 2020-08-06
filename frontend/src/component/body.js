import React,{useEffect} from "react"
import styled from 'styled-components'
import FirstClildEmenent from "./firstchildelement"
import SecondChild from "./top/secondchildelem"
import ThirdChild from "./top/thirdchildelem"
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';

const Parent=styled.div`
    display:flex;
    flex-direction:column;
    margin-top:5%;
`

const Child=styled.div`
    display:flex;
    margin-bottom:25px;
    margin-left:7vw;
    margin-right:7vw;
    height:15vw;
    border-top-left-radius: 10vw;
    background-color:white;
    overflow:hidden;
    justify-content:space-between;
`

const BodyListContainer=({list,loading})=>{

    if(loading){
        return <h1>Loading List</h1>
    }
    
    if(list){
        console.log("List is ",list)
    }
    return (
        <>
        <Parent>
            {list.map((i)=>{
                console.log("Printig i",i)
                return <Child>
                <FirstClildEmenent name={i.name} challenge={i.challenges} votes={i.votes}/>
                <SecondChild expertise={i.expertin}/>
                <ThirdChild idkey={i._id}/>
            </Child>
            })}
        <Child style={{"backgroundColor":"orange"}}>part2</Child>
        </Parent>
        </>
    )
}

BodyListContainer.propTypes = {
}

const mapStateToProps=state=>({
    list:state.hackers.hackers,
    loading:state.hackers.loading
})

export default connect(mapStateToProps,{}) (BodyListContainer)