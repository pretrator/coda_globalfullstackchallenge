import React from "react"
import styled from 'styled-components'
import {castvote} from "../../actions/voting"
import {connect} from 'react-redux';
import { useLocation,useHistory} from "react-router-dom";
import {deleteid} from '../../actions/admin'

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

const ThirdChildElement=({idkey,castvote,deleteid,admintoken})=>{
    const loc=useLocation();
    const hist=useHistory();
    if(loc.pathname=="/"){
        return (<>
            <Div1>
            <Button id={idkey} onClick={(e)=>castvote(e.target.id)}>Vote</Button>
            </Div1>
        </>)
    }
    else if(loc.pathname=="/admin"){
        return (<>
            <Div1>
            <Button id={idkey} onClick={(e)=>deleteid(e.target.id,admintoken)}>Delete</Button>
            <Button id={idkey} onClick={(e)=>hist.push(`admin/update/${e.target.id}`)}>Edit</Button>
            </Div1>
        </>)
    }
}
const mapStateToProps=state=>({
    loading:state.auth.loading,
    admintoken:state.admin.admintoken,
})

export default connect(mapStateToProps,{castvote,deleteid}) (ThirdChildElement)