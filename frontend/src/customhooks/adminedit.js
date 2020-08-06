import React,{useState} from "react";

export const useTextBox=(state)=>{
    const [text,setText]=useState(state);
    const textBox=()=><input type="text" value={text} onChange={(e)=>setText(e.target.value)} key={"asdasdad"}/>
    return [text,textBox]
}