const router=require("express").Router()
const requestIp = require('request-ip')
var jwt = require('jsonwebtoken');
const User=require("../datamodel/User")


router.get("/",async (req,res,next)=>{
    const clientIp = requestIp.getClientIp(req);
    const token = jwt.sign({ ip:clientIp  }, process.env.JWT_SECRET);
    res.send({token})
})

router.get("/getlis",async(req,res,next)=>{
    const list=await User.find()
    res.send(list)
})

module.exports=router