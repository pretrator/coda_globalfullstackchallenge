import React from "react"
import styled from 'styled-components'
const Top=()=>{

    const Parentdiv=styled.div`
        display:flex;
        flex-direction:row;
        color:white;
        justify-content:space-between;
        margin-top:7%;
        margin-bottom:2%;
    `
    const ChildTop=styled.div`
        flex:2;
        display:flex;
        justify-content:center;
        font-size:7vw;
        color:#fdcb9e;
        font-weight:bold;
    `
    
    return (<>
        <Parentdiv>
            <ChildTop>
                Hackers Voting
            </ChildTop>
            <ChildTop style={{flex:1}}></ChildTop>
        </Parentdiv>
        </>)
}

export default Top; 