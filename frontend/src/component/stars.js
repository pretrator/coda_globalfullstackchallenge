import React from "react"
import styled from 'styled-components'

const Div1=styled.div`
    flex:1;
`
const checked={
    color:"orange",
}

const Stars=()=>{
    return (<>
        <span class="fa fa-star" style={checked}></span>
        <span class="fa fa-star" style={checked}></span>
        <span class="fa fa-star" style={checked}></span>
        <span class="fa fa-star-o"></span>
        <span class="fa fa-star-o"></span>
    </>)
}

export default Stars;