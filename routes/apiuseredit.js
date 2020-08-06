const router=require("express").Router()
const User=require("../datamodel/User")
const validator=require("./validation/errmiddle")

router.post("/add",validator.adduser,async (req,res,next)=>{
    console.log("to add",req.body)
    const d=new User({
        name:req.body.name,
    })
    try{
        const k=await d.save()
        res.send({
            msg:"New Hacker Added"
        })
    }
    catch(e){
        res.send({
            msg:"Failed to add New Hacker"
        })
        next(e)
    }
})

router.post("/update",validator.update,async (req,res,next)=>{
    console.log("to add",req.body)
    const {id,update}=req.body
    User.findByIdAndUpdate({_id:id},update)
        .then(()=>{
                res.send({
                    msg:"Updated"
                })
            })
        .catch((e)=>{
            res.send({
                msg:"Updation Failed",
                err:e
            })
        })
        
})

router.post("/del",validator.del,async (req,res,next)=>{
    const {id}=req.body
    try{
        const s=await User.deleteOne({_id:id})
        res.send({
            msg:"Deleted"
        })
    }
    catch(e){
        res.send({
            msg:"Failed to delete"
        })
    }
})

router.post("/isgood",(req,res,next)=>{
    res.send({
        msg:"Authenticated"
    })
})



module.exports=router