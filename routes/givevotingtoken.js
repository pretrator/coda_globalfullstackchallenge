const router=require("express").Router()
const requestIp = require('request-ip')
var jwt = require('jsonwebtoken');


router.get("/",async (req,res,next)=>{
    const clientIp = requestIp.getClientIp(req);
    const token = jwt.sign({ ip:clientIp  }, process.env.JWT_SECRET);
    res.send({token})
})

module.exports=router