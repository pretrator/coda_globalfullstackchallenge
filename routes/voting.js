const router=require("express").Router()
const voter=require("../datamodel/Voter")
const User=require("../datamodel/User")
const validator=require("./validation/errmiddle")
const requestIp = require('request-ip')


router.post("/",validator.voting,async (req,res,next)=>{
    const {id}=req.body
    const vote=new voter({
        jwt:req.body.token,
    })
    try{
        const d=await vote.save()
        const dd=await User.findByIdAndUpdate(
            {_id:req.body.id},
            {"$inc":{votes:1}})
        res.send({
            msg:"Vote cast Successfull"
        })
    }
    catch(e){
        res.status(500).send({
            msg:"Vote cast Unsuccessful",
        })
    }
})

module.exports=router