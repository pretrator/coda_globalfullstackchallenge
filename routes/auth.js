const router=require("express").Router()
var jwt = require('jsonwebtoken');

router.post("*",(req,res,next)=>{
    const body=req.body
    console.log("Auth running")
    try{
        var decoded = jwt.verify(body.token, process.env.JWT_SECRET);
        console.log(decoded)
        if(decoded.msg==="admin"){
            console.log("Admin access granted")
            next()
        }
    }
    catch(e){
    res.send({
        code:606,
        msg:"Admin access not granted"
    })
    }
})

module.exports=router