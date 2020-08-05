import React from "react"
import styled from 'styled-components'

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



const FirstChildElement=()=>{
    
    return (<>
        <Div1>
            <Div2>Ujjwal Srivastava</Div2>
            <Div3>Solved 34 Challenges</Div3>
        </Div1>
    </>)
}

export default FirstChildElement;