import React from "react"
import styled from 'styled-components'
import Star from "../stars"

const Div1=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    background-color:lightblue;
    justify-content:center;
    padding:2em;
`

const Div2=styled.div`
    display:flex;
    font-size:2em;
`

const Div3=styled.div`
    display:flex;
    font-size:1.5em;
    justify-content:space-between;
    width:15vw;
`
const Div4=styled.div`
    display:flex;
`

const SecondChildElement=()=>{
    return (<>
        <Div1>
            <Div2>Expert in</Div2>
            <Div3>
                <Div4>
                    Algo
                </Div4>
                <Div4>
                    <Star />
                </Div4>
            </Div3>
        </Div1>
    
    </>)
}

export default SecondChildElement;