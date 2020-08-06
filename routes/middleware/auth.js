var jwt = require('jsonwebtoken');
const requestIp = require('request-ip')

module.exports={
admin:(req,res,next)=>{
    const body=req.body
    console.log("Auth Admin running",body)
    try{
        var decoded = jwt.verify(body.token, process.env.JWT_SECRET);
        console.log(decoded)
        if(decoded.msg==="admin"){
            console.log("Admin access granted")
            next()
        }
    }
    catch(e){
    res.status(500).send({
        code:606,
        msg:"Admin access not granted"
    })
    }
},

user:(req,res,next)=>{
    const {token}=req.body
    console.log("Auth User running")
    try{
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded",decoded)
        if(decoded.ip===requestIp.getClientIp(req)){
            console.log("User access granted")
            next()
        }
        else{
            res.status(500).send({
            msg:"Bad token proided"
        })
    }
    }
    catch(e){
    res.send({
        code:606,
        msg:"User access not granted"
    })
    }
}
}