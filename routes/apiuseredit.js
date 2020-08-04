const router=require("express").Router()
const User=require("../datamodel/User")
const valid=require("./validation")
const {body}=require('express-validator');

router.post("/add",[
    body("name").exists().notEmpty().isLength({max:34}),
    valid
],async (req,res,next)=>{
    console.log("to add",req.body)
    const d=new User({
        name:req.body.name,
    })
    try{
        const k=await d.save()
        res.send({id:k._id})
    }
    catch(e){
        next(e)
    }
})

router.post("/update",async (req,res,next)=>{
    console.log("to add",req.body)
    const {id,update}=req.body
    try{
        User.findByIdAndUpdate(
            {_id:id},
            update,
            ()=>{
                res.send({
                    msg:"Updated"
                })
            })
        }
    catch(e){
        next(e)
    }
})

router.post("/del",[
    body("id").isLength({max:24},{min:24}),
    valid
],async (req,res,next)=>{
    const {id}=req.body
    try{
        const s=User.deleteOne({_id:id})
        res.send({
            gh:"78",
            d:s
        })
    }
    catch(e){
        res.send({
            err:e
        })
    }
})

router.get("/",async(req,res,next)=>{
    const list=await User.find()
    res.send(list)
})

module.exports=router