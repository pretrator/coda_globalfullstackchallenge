import React,{useState} from "react"
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import {connect} from 'react-redux';
import {update} from "../../actions/admin"

const Div=styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Div1=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
color:white;
width:40vw;
`
const Input=styled.input`
    font-size:30px;
`

const H1=styled.h1`
    color:white;
`
const Button=styled.button`
    font-size:3vw;
    margin:1vw;
    padding:0.7vw;
`

const Edit=({list,update,token})=>{
   const id=useParams().id
   const person=list.filter((i)=>i._id==id)[0]
   const submit=()=>{
       const data={
           name,
           votes:vote,
           challenges:challenge,
           expertin:{
               ds:exp2,
               algo:exp1,
               java:exp3,
               python:exp4,
           }
       }
       update(token,id,data)
   }

   const [name,setname]=useState(person.name)
   const [challenge,setchallenge]=useState(person.challenge)
   const [vote,setvote]=useState(person.votes)
   const [exp1,setexp1]=useState(person.expertin ? person.expertin.algo : 0)
   const [exp2,setexp2]=useState(person.expertin ? person.expertin.ds : 0)
   const [exp3,setexp3]=useState(person.expertin ? person.expertin.java : 0)
   const [exp4,setexp4]=useState(person.expertin ? person.expertin.python : 0)

    return <>
    <Div>
    <H1>Edit profile of {person.name}</H1>
    <Div1><h3>Name</h3><Input value={name} onChange={(e)=>setname(e.target.value)}/></Div1>
    <Div1><h3>Challenges Solved</h3><Input value={challenge} onChange={(e)=>setchallenge(e.target.value)}/></Div1>
    <Div1><h3>Votes </h3><Input value={vote} onChange={(e)=>setvote(e.target.value)}/></Div1>
    <Div1><h3>Rating of Algo</h3><Input value={exp1} onChange={(e)=>setexp1(e.target.value)}/></Div1>
    <Div1><h3>Rating of DS</h3><Input value={exp2} onChange={(e)=>setexp2(e.target.value)}/></Div1>
    <Div1><h3>Rating of Java</h3><Input value={exp3} onChange={(e)=>setexp3(e.target.value)}/></Div1>
    <Div1><h3>Rating of Python</h3><Input value={exp4} onChange={(e)=>setexp4(e.target.value)}/></Div1>
    <Div1 style={{justifyContent:"center"}}><Button onClick={submit}>Submit</Button></Div1>
    </Div>
    </>
}

const mapStateToProps=state=>({
    list:state.hackers.hackers,
    token:state.admin.admintoken,
})
export default connect(mapStateToProps,{update}) (Edit)