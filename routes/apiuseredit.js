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
        res.send({id:k._id})
    }
    catch(e){
        next(e)
    }
})

router.post("/update",validator.update,async (req,res,next)=>{
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

router.post("/del",validator.del,async (req,res,next)=>{
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



module.exports=router