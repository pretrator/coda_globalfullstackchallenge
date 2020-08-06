const router=require("express").Router()
const voter=require("../datamodel/voter")
const User=require("../datamodel/User")
const validator=require("./validation/errmiddle")
const requestIp = require('request-ip')


router.post("/",validator.voting,async (req,res,next)=>{
    console.log("Recieved voting request")
    const {id}=req.body
    const vote=new voter({
        jwt:req.body.token,
    })
        vote.save()
        .then(()=>{
            User.findByIdAndUpdate({_id:req.body.id},{"$inc":{votes:1}})
                .then(()=>{
                    res.send({
                        msg:"Vote cast Successfull"
                    })
                })
            })
        .catch(()=>{
            res.send({
                msg:"Vote cast Unsuccessful",
            })
        })
    
})

module.exports=router