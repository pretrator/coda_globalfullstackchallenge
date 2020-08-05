import React from "react"
import styled from 'styled-components'
import FirstClildEmenent from "./firstchildelement"
import SecondChild from "./top/secondchildelem"
import ThirdChild from "./top/thirdchildelem"

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

const BodyListContainer=()=>{
    return (
        <>
        <Parent>
        <Child>
            <FirstClildEmenent />
            <SecondChild />
            <ThirdChild />
        </Child>
        <Child style={{"backgroundColor":"orange"}}>part2</Child>
        </Parent>
        </>
    )
}

export default BodyListContainer;