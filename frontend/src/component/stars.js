import React from "react"
import styled from 'styled-components'

const Div1=styled.div`
    flex:1;
`
const checked={
    color:"orange",
}

const Stars=({rating})=>{
    const arr=[]
    for(let i=0;i<rating;i++){
        arr.push(<span className="fa fa-star" style={checked}></span>)
    }
    for(let j=rating;j<5;j++){
        arr.push(<span className="fa fa-star-o"></span>)
    }
    console.log(arr)
    return (<>
      {arr}  
    </>)
}

export default Stars;