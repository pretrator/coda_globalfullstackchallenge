import React from "react"
import styled from 'styled-components'

const Div1=styled.div`
    display:flex;
    flex:1;
    background-color:lightblue;
    flex-direction:column;
    justify-content:center;
`

const Button=styled.button`
    background-color: #66023c;
    width:90%;
    border-radius: 60px;
    color:aliceblue;
    font-size:3vw;
    height:4vw;
    &:hover {
        background-color: #922724;
      }
`

const ThirdChildElement=()=>{
    return (<>
        <Div1>
        <Button>Vote</Button>
        </Div1>
    </>)
}

export default ThirdChildElement;