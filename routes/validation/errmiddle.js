const { body, sanitize } = require('express-validator')
const validmiddle=require('./validresultreturn')

const getvalidator={
    adduser: [body("name").exists().notEmpty().isLength({max:34})],
    del: [body("id").isLength({max:24},{min:24})],
    update: [
        body("update").exists(),
        body("update.name").optional().notEmpty().isLength({max:34}),
        body("update.votes").optional().toInt(),
        body("update.challenges").optional().isLength({max:20}).toInt(),
        body("update.expertin.*").optional().toInt().isIn([0,1,2,3,4,5])
    ],
    voting: [
        body("id").exists().isLength({max:34})
    ]
}

const constantvalidators={
    init:[body("token").isJWT()],
    end:[validmiddle]
}
const packer=(validator)=>{
    for (let a in validator){
        validator[a].push(...constantvalidators.end)
        validator[a].splice(0, 0, ...constantvalidators.init)
    }
}

packer(getvalidator)


module.exports=getvalidator