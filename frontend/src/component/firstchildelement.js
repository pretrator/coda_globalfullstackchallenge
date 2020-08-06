import React from "react"
import styled from 'styled-components'
import { useLocation } from "react-router-dom"

const Div1=styled.div`
    flex:2;
    color:crimson;
    flex-direction:row;
    justify-content:flex-start;
    padding:5vw;
`

const Div2=styled.div`
    display:flex;
    font-size:3vw;
`
const Div3=styled.div`
    display:flex;
    font-size:2.4ch;
`



const FirstChildElement=({name,challenge,votes})=>{
    const loc=useLocation()
    return (<>
        <Div1>
    <Div2>{name[0].toUpperCase()+name.slice(1)}</Div2>
            <Div3>Solved {challenge} Challenges</Div3>
            <Div3>Votes: {votes}</Div3>
        </Div1>
    </>)
}

export default FirstChildElement;