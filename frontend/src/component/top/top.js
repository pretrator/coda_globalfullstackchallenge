import React from "react"
import styled from 'styled-components'
import {useHistory, useLocation} from "react-router-dom"
import {addnew} from '../../actions/admin'
import {connect} from 'react-redux';

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
const Button=styled.button`
background-color: #66023c;
width:50%;
border-radius: 60px;
color:aliceblue;
font-size:3vw;
height:4vw;
&:hover {
background-color: #922724;
}
`

const Top=({admintoken,addnew})=>{
const hist=useHistory()
const loc=useLocation()
    return (<>
        <Parentdiv>
            <ChildTop>
                Hackers Voting
            </ChildTop>
            <ChildTop style={{flex:1}}>
                {
                loc.pathname==="/"?
                <Button onClick={()=>hist.push("/admin")}>Admin</Button>:
                <Button onClick={()=>addnew(admintoken)}>Add new</Button>}
            </ChildTop>
        </Parentdiv>
        </>)
}
const mapStateToProps=state=>({
    admintoken:state.admin.admintoken,
})

export default connect(mapStateToProps,{addnew}) (Top)